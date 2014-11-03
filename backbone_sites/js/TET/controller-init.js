/**
 * Created by chenzhengtong on 2014/9/25.
 */

$(document).ready(
    function () {

        "use strict";

        /*var buttonIdList = [
            "#btn-home", "#btn-pre-sale", "#btn-shop", "#btn-vote",
            "#btn-bbs", "#btn-login", "#btn-register"
        ];

        window.controller.showHome();
        //window.controller.showProfile();

        for (var i in buttonIdList) {
            var currId = buttonIdList[i];
            var currObj = $(currId);
            currObj.bind("click", function () {
                window.controller.showRelevantContent($(this));
                window.controller.activateCurrentButton($(this));
            });
        }*/

        var mainContentView = new window.TEView.OneView();
        window.currButtonObj = $("#btn-home");
    }
);