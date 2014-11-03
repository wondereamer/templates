/**
 * Created by chenzhengtong on 2014/9/25.
 */

(function () {

    "use strict";

    window.controller = window.controller || {};

    // CONSTANT
    var MAIN_CONTENT = "#main-content";
    var COLLAPSED_NAVBAR = "#collapsed-navbar";

    window.controller.showHome = function () {
        $(MAIN_CONTENT).html(
            TETemplates.templateProductCarousel()
            + "<br/>"
            + TETemplates.templateProductThreeColumns()
            + "<br/>"
            + TETemplates.templateProductThreeColumns()
        );
    }

    window.controller.showLogin = function () {
        $(MAIN_CONTENT).html(TETemplates.templateLogin());
    };

    window.controller.showRegister = function () {
        $(MAIN_CONTENT).html(TETemplates.templateRegister());
    };

    window.controller.showPreSale = function () {
        //
    };

    window.controller.showShop = function () {
        //
    };

    window.controller.showVote = function () {
        //
    };

    window.controller.showBBS = function () {
        $(MAIN_CONTENT).html(
            TETemplates.templateBBSSection()
            + TETemplates.templateBBSSection()
        );
    };

    window.controller.showProfile = function () {
        $(MAIN_CONTENT).html(
           TETemplates.templateProfile()
        );
    };

    window.controller.showProfileModification = function () {
        $(MAIN_CONTENT).html(
            TETemplates.templateProfileModification()
        );
    };

    window.controller.activateCurrentButton = function (currId) {
        window.currButtonObj.toggleClass("active");
        var currObj = $("#" + currId);
        currObj.toggleClass("active");
        window.currButtonObj = currObj;
    };

    window.controller.collapseNavbar = function () {
        // For bootstrap 3.x;
        // Collapse the navbar;
        if ($(COLLAPSED_NAVBAR).is(":visible")) {
            $(COLLAPSED_NAVBAR).click();
        }
    };

    window.controller.showRelevantContent = function (currId) {
        //
        if (currId === "btn-login") {
            window.controller.showLogin();
        }
        else if (currId === "btn-register") {
            window.controller.showRegister();
        }
        else if (currId === "btn-home") {
            window.controller.showHome();
        }
        else if (currId === "btn-pre-sale") {
            window.controller.showPreSale();
        }
        else if (currId === "btn-shop") {
            window.controller.showShop();
        }
        else if (currId === "btn-vote") {
            window.controller.showVote();
        }
        else if (currId === "btn-bbs") {
            window.controller.showBBS();
        }

        window.controller.activateCurrentButton(currId);
        window.controller.collapseNavbar();
    };
})();
