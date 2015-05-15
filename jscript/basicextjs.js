Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.Msg.alert("Config status","Hi, Ext Js is configured successfully :)");
	
	Ext.create('Ext.Button', {
		text: 'Tooltip button',
		renderTo: Ext.getBody(),
		// handler: function(){
			// Ext.Msg.alert('You clicked Me')
		// },
		tooltip: {
			text: "Hey! you moved mouse cursor into my area :)",
			width: 100
		},
		listeners : {
			'click':function(){
				Ext.Msg.alert('You clicked Me');
			}
		}
	});
	
	var grdStore = Ext.create('Ext.data.Store',{
		fields: ['name','address'],
		//data: [{'name':'Ravi','address':'Jharkhand'},{'name':'Ashish','address':'Jharkhand'},{'name':'Nilesh','address':'Jharkhand'}]
				autoLoad: true,
		proxy: {
			type: 'ajax',
			url: 'simple-grid.txt',
			reader: {
				type: 'json',
				root: ''
			}
		}
	});
	var basicGrid = Ext.create('Ext.grid.Panel',{
		title: 'sample grid',
		columns: [{dataIndex:'name',header:'Name'},{dataIndex:'address',header:'Address'}],
		store: grdStore,
		width: 300,
		renderTo: Ext.getBody()
	});
});