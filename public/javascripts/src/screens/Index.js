var Index = Screen.extend({

    init: function(){
        this._super("Index", '#/', 'Index');
    },

    enableClickEvents : function(){
        this._super();
    },

    setup : function() {
        this._super();
    },

    populateData : function(viewModel) {
        //Data Should come from server side
        var data = {
		    thisName: "Page 1"
	    };
        this._super(data);
    }

});
