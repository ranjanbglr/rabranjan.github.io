Ext.onReady(function(){
	
	Ext.create('Ext.Button', {
		text: 'Ajax Call button',
		renderTo: Ext.getBody(),
		// handler: function(){
			// Ext.Msg.alert('You clicked Me')
		// },
		listeners : {
			'click':function(){
				Ext.Ajax.request({
					url:'simple-grid.txt',
					success: function(response){
						//Ext.fly('div1').update(response.responseText);
						Ext.Msg.alert("Status",response.responseText);
					}
				});
			}
		}
	});
	
	
	
	var gStore = Ext.create('Ext.data.Store',{
		fields: ['name','address'],
		autoLoad: 'true',
		proxy:{
			url: 'simple-grid.txt',
			type: 'ajax',
			reader: {
				type: 'json',
				root: ''
			}
		}
	});
	var cellEditing = Ext.create('Ext.grid.plugin.CellEditing',{
		clicksToEdit: 1
	});
	
	var editableGrid = Ext.create('Ext.grid.Panel',{
		title: 'Editable grid',
		columns: [{
				dataIndex:'name',header:'Name',editor:{xtype:'textfield'}
			},{
				dataIndex:'address',header:'Address',editor:{xtype:'textfield'}
			}],
		store: gStore,
		renderTo: Ext.getBody(),
		width: 250,
		plugins: [cellEditing]
	});
	/*
    Ext.create('Ext.Viewport', {
        layout: {
            type: 'border',
            padding: 5
        },
        defaults: {
            split: true
        },
        items: [{
            region: 'center',
            scrollable: true,
            autoScroll: true,
            height: '100%',
            width: '100%',
            bodyStyle: 'background: #DEEBF7;',
            id: 'center-panel',
            name: 'center-panel',
            items: [				
				editableGrid				
			]
		}]
    });
	*/
});