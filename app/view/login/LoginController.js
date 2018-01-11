Ext.define('SSJT.view.login.LoginController',{
    extend:'Ext.app.ViewController',
    alias:'controller.login',
    onLoginClick:function(){
        localStorage.setItem('LoginStatus',true);
        this.getView().destroy();
       Ext.create({
            xtype:'app-main'
        });
    },
    onCancelClick:function(){
        this.getView().hide();
    }
});