Ext.onReady(function(){
	
	Ext.create('Ext.Button', {
		text: 'Tooltip button',
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
	var cellEditing = Ext.create('Ext.grid.plugin.CellEditing'{
		clicksToEdit: 1
	});
	
	var grid = Ext.create('Ext.grid.Panel',{
		title: 'Editable grid',
		columns: [{dataIndex:'name',header:'Name'},{dataIndex:'address',header:'Address'}],
		store: gStore,
		renderTo: Ext.getBody(),
		width: 250,
		plugins: [cellEditing]
	});
});