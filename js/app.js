/**
 * Created by shunsuke on 14/03/25.
 */
(function(){
    console.log("Hello Backbone!");

    var obj = new Backbone.Model();

    obj.set({name: "Murata"});
    obj.set({age: 20});

    console.log("obj: " + JSON.stringify(obj));
    console.log("obj.name: " + obj.get("name"));

    var Staff = Backbone.Model.extend({
        defaults: {
            "name": "",
            "age": 0,
            "updateTime": new Date()
        },
        initialize: function(){
            console.log("Staff[" + this.cid + "] : " + JSON.stringify(this));
        }
    });

    var tmpStaff = new Staff();
    tmpStaff.set({name: "Murata", age: 15, id: 101});

    console.log("Staff[" + tmpStaff.cid + "]: " + JSON.stringify(tmpStaff));
    var tmpStaff2 = new Staff({name: "Keichiro", age: 35, id: 102});

    var obj2 = new Backbone.Model({"name":"Keichiro", "age": 30});

    var objs = new Backbone.Collection([obj, obj2]);
    console.log("objs: " + JSON.stringify(objs));

    console.log("objs.get(cid): " + JSON.stringify(objs.get("c1")));
    console.log("objs.at(index): " + JSON.stringify(objs.at(0)));

    objs.add(new Backbone.Model({name:"Acroquest", age: 20}));
    objs.add(new Backbone.Model({name: "Technology", age: 10}));

    console.log("objs.length: " + objs.length);
    console.log("objs: " + JSON.stringify(objs));

    objs.comparator = function(item){
        return item.get("age");
    }

    objs.sort();
    console.log("After sort objs: " + JSON.stringify(objs));
    console.log("After sort objs.at(index): " + JSON.stringify(objs.at(0)));

    objs.remove(obj2);
    console.log("objs.length: " + objs.length);
    console.log("objs: " + JSON.stringify(objs));

    var Staffs = Backbone.Collection.extend({
        model: Staff
    });

    var staffs = new Staffs([tmpStaff, tmpStaff2]);

    console.log("staffs: " + JSON.stringify(staffs));
    console.log("staffs.get(cid): " + JSON.stringify(staffs.get("c4")));
    console.log("staffs.at(index): " + JSON.stringify(staffs.at(1)));
    console.log("staffs.get(id): " + JSON.stringify(staffs.get(102)));

    objs.each(function(item, index){
        console.log("each(" + index + "): " + JSON.stringify(item));
    });

    var tmpObj = objs.find(function(item){
        return item.get("age") === 20;
    });
    console.log("find res: " + JSON.stringify(tmpObj));

    

}());