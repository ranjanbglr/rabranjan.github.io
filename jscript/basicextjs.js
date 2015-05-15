Ext.onReady(function(){
	Ext.Msg.alert("Config status","Hi, Ext Js is configured successfully :)");
	
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
	Ext.create('Ext.grid.Panel',{
		title: 'sample grid',
		columns: [{dataIndex:'name',header:'Name'},{dataIndex:'address',header:'Address'}],
		store: grdStore,
		width: 300,
		renderTo: Ext.getBody(),
	})
});