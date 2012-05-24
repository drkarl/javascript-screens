var Content = Screen.extend({

    init: function(){
        this._super("Content", '#/content', 'Content');
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
		    thatName: "Page 2"
	    };
        this._super(data);
    }

});
