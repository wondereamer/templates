/**
 * Created by chenzhengtong on 2014/9/25.
 */
(function () {

    "use strict";

    window.TETemplates = window.TETemplates || {};

    window.TETemplates.templateView = _.template('\
    <!-- -->\
    <div class="wrap">\
        <div id="navbar"></div>\
        <div id="main-content"></div>\
    </div>\
    <br />\
    <div class="footer">\
    </div>\
    ');

    window.TETemplates.templateNavbar = _.template('\
    <!-- -->\
    <nav class="navbar navbar-default navbar-static-top" role="navigation">\
        <div class="container-fluid">\
        <div class="navbar-header">\
            <button id="collapsed-navbar" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\
                <span class="sr-only">Toggle navigation</span>\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span>\
            </button>\
            <!-- -->\
            <a class="navbar-brand" href="javascript:void(0);">\
                <img alt="Brand" src="" />\
            </a>\
        </div>\
        <!-- Collect the nav links, forms, and other content for toggling -->\
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\
            <ul class="nav navbar-nav">\
                <li class="active" id="btn-home"><a href="javascript:void(0);">主页</a></li>\
                <li class="" id="btn-pre-sale"><a href="javascript:void(0);">预售</a></li>\
                <li class="" id="btn-shop"><a href="javascript:void(0);">商店</a></li>\
                <li class="" id="btn-vote"><a href="javascript:void(0);">投票</a></li>\
                <li class="" id="btn-bbs"><a href="javascript:void(0);">社区</a></li>\
            </ul>\
            <form class="navbar-form navbar-left" role="search">\
                <div class="form-group">\
                    <input type="text" class="form-control" placeholder="Search">\
                    </div>\
                    <button type="submit" class="btn btn-default">Submit</button>\
                </form>\
                <ul class="nav navbar-nav navbar-right">\
                    <li id="btn-login"><a href="javascript:void(0);">登录</a></li>\
                    <li id="btn-register"><a href="javascript:void(0);">注册</a></li>\
                </ul>\
            </div><!-- /.navbar-collapse -->\
        </div>\
    </nav>\
    ');

    window.TETemplates.templateProductCarousel = _.template('\
    <!-- -->\
    <div class="container" id="product-carousel">\
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\
            <!-- Indicators -->\
            <ol class="carousel-indicators">\
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>\
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>\
            </ol>\
            <!-- Wrapper for slides -->\
            <div class="carousel-inner" role="listbox">\
                <div class="item active">\
                    <img src="customized/img/first-slide.svg" alt="...">\
                    <div class="carousel-caption">\
                    ...\
                    </div>\
                </div>\
                <div class="item">\
                    <img src="customized/img/second-slide.svg" alt="...">\
                    <div class="carousel-caption">\
                    ...\
                    </div>\
                </div>\
                <div class="item">\
                    <img src="customized/img/third-slide.svg" alt="...">\
                    <div class="carousel-caption">\
                        ...\
                    </div>\
                </div>\
            </div>\
            <!-- Controls -->\
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\
                <span class="glyphicon glyphicon-chevron-left"></span>\
                <span class="sr-only">Previous</span>\
            </a>\
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\
                <span class="glyphicon glyphicon-chevron-right"></span>\
                <span class="sr-only">Next</span>\
            </a>\
        </div>\
    </div>\
    ');

    window.TETemplates.templateProductThreeColumns = _.template('\
    <!-- -->\
    <div class="container" id="product-three-columns">\
        <div class="col-md-4">\
            <div class="panel panel-default">\
                <div class="panel-body">\
                    <img class="img-responsive" src="customized/img/Chrysanthemum.jpg" />\
                </div>\
                <div class="panel-footer">\
                    <h6>Title</h6>\
                    <p style="word-wrap: break-word;">\
                        <small>Author: xxxxxx</small>\
                    </p>\
                    <p style="word-wrap: break-word;">\
                        <small>\
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\
                        </small>\
                    </p>\
                </div>\
            </div>\
        </div>\
        <div class="col-md-4">\
            <div class="panel panel-default">\
                <div class="panel-body">\
                    <img class="img-responsive" src="customized/img/Desert.jpg" />\
                </div>\
                <div class="panel-footer">\
                    <h6>Title</h6>\
                    <p style="word-wrap: break-word;">\
                        <small>Author: xxxxxx</small>\
                    </p>\
                    <p style="word-wrap: break-word;">\
                        <small>\
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\
                        </small>\
                    </p>\
                </div>\
            </div>\
            </div>\
        <div class="col-md-4">\
            <div class="panel panel-default">\
                <div class="panel-body">\
                    <img class="img-responsive" src="customized/img/Hydrangeas.jpg" />\
                </div>\
                <div class="panel-footer">\
                    <h6>Title</h6>\
                    <p style="word-wrap: break-word;">\
                        <small>Author: xxxxxx</small>\
                    </p>\
                    <p style="word-wrap: break-word;">\
                        <small>\
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\
                        </small>\
                    </p>\
                </div>\
            </div>\
        </div>\
    </div>\
    ');

    window.TETemplates.templateLogin = _.template('\
    <!-- -->\
    <div class="container" id="form-showLogin">\
        <div class="row">\
            <div class="col-md-4 col-md-offset-4">\
                <div class="panel panel-default">\
                    <div class="panel-heading">\
                        <h3 class="panel-title">Please sign in</h3>\
                    </div>\
                    <div class="panel-body">\
                        <form accept-charset="UTF-8" role="form">\
                            <fieldset>\
                                <div class="form-group">\
                                    <input class="form-control" placeholder="E-mail" name="email" type="text">\
                                </div>\
                                <div class="form-group">\
                                    <input class="form-control" placeholder="Password" name="password" type="password" value="">\
                                </div>\
                                <div class="checkbox">\
                                    <label>\
                                        <input name="remember" type="checkbox" value="Remember Me"> Remember Me\
                                    </label>\
                                </div>\
                                <input class="btn btn-lg btn-success btn-block" type="submit" value="Login">\
                            </fieldset>\
                        </form>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    ');

    window.TETemplates.templateRegister = _.template('\
    <!-- -->\
    <div class="container" id="form-showRegister">\
        <div class="row">\
            <div class="col-md-6 col-md-offset-3">\
                <div class="panel panel-default">\
                    <div class="panel-heading">\
                        <h3 class="panel-title">Create account</h3>\
                    </div>\
                    <div class="panel-body">\
                        <form accept-charset="UTF-8" role="form">\
                            <fieldset>\
                                <div class="form-group">\
                                    <input class="form-control" placeholder="E-mail" name="email" type="text">\
                                </div>\
                                <div class="form-group">\
                                    <input class="form-control" placeholder="User name" name="name" type="text">\
                                </div>\
                                <div class="form-group">\
                                    <input class="form-control" placeholder="Password" name="password" type="password" value="">\
                                </div>\
                                <div class="form-group">\
                                    <input class="form-control" placeholder="Password again" name="password-again" type="password" value="">\
                                </div>\
                                <input class="btn btn-lg btn-primary btn-block" type="submit" value="Register">\
                            </fieldset>\
                        </form>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    ');

    window.TETemplates.templateBBSSection = _.template('\
    <!-- -->\
    <div class="container">\
        <div class="row">\
            <div class="panel panel-default">\
                <div class="panel-heading">\
                    <div class="row">\
                        <div class="col-md-12 well-sm">最新动态</div>\
                        <div class="col-md-4">\
                            <div class="panel panel-default">\
                                <div class="panel-body">\
                                    <img class="img-responsible img-rounded" src="" alt="img" />\
                                </div>\
                            </div>\
                        </div>\
                        <div class="col-md-4">\
                            <div class="panel panel-default">\
                                <div class="panel-body">\
                                    <img class="img-responsible img-rounded" src="" alt="img" />\
                                </div>\
                            </div>\
                        </div>\
                        <div class="col-md-4">\
                            <div class="panel panel-default">\
                                <div class="panel-body">\
                                    <img class="img-responsible img-rounded" src="" alt="img" />\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <div class="panel-body">\
                    <div class="list-group">\
                        <a class="list-group-item">\
                            <div class="row">\
                                <div class="col-md-7">\
                                    这些昂贵的科技产品真是贵到没朋友\
                                </div>\
                                <div class="col-md-3">\
                                    <img class="img-responsible img-circle" src="" alt="img" />\
                                    <strong>TeaEra</strong>\
                                </div>\
                                <div class="col-md-1">\
                                    3 views\
                                </div>\
                                <div class="col-md-1">\
                                    1 replies\
                                </div>\
                            </div>\
                        </a>\
                        <a class="list-group-item">\
                            <div class="row">\
                                <div class="col-md-7">\
                                    这些昂贵的科技产品真是贵到没朋友\
                                </div>\
                                <div class="col-md-3">\
                                    <img class="img-responsible img-circle" src="" alt="img" />\
                                    <strong>TeaEra</strong>\
                                </div>\
                                <div class="col-md-1">\
                                    3 views\
                                </div>\
                                <div class="col-md-1">\
                                    1 replies\
                                </div>\
                            </div>\
                        </a>\
                        <a class="list-group-item">\
                            <div class="row">\
                                <div class="col-md-7">\
                                    这些昂贵的科技产品真是贵到没朋友\
                                </div>\
                                <div class="col-md-3">\
                                    <img class="img-responsible img-circle" src="" alt="img" />\
                                    <strong>TeaEra</strong>\
                                </div>\
                                <div class="col-md-1">\
                                    3 views\
                                </div>\
                                <div class="col-md-1">\
                                    1 replies\
                                </div>\
                            </div>\
                        </a>\
                    </div>\
                </div>\
            </div>\
        <div>\
    </div>\
    ');

    window.TETemplates.templateProfileModification = _.template('\
    <!-- -->\
    <div class="container" id="form-profile">\
        <div class="row">\
            <div class="col-md-10 col-md-offset-1">\
                <div class="panel panel-default">\
                    <div class="panel-heading">\
                        <h3 class="panel-title">Profile</h3>\
                    </div>\
                    <div class="panel-body">\
                        <form accept-charset="UTF-8" role="form">\
                            <fieldset>\
                                <div class="form-group">\
                                    <input class="form-control" placeholder="User name" name="name" type="text" />\
                                </div>\
                                <div class="form-group">\
                                    <input class="form-control" placeholder="Email" name="email" type="text" />\
                                </div>\
                                <input class="btn btn-lg btn-primary btn-block" type="submit" value="Save" />\
                            </fieldset>\
                        </form>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    ');

    window.TETemplates.templateProfile = _.template('\
    <!-- -->\
    <div class="container" id="form-show-profile">\
        <div class="row">\
            <div class="col-md-8 col-md-offset-2">\
                <div class="panel panel-default">\
                    <div class="panel-heading">\
                        <h3 class="panel-title">Profile</h3>\
                    </div>\
                    <div class="panel-body">\
                        <form accept-charset="UTF-8" role="form">\
                            <fieldset>\
                                <div class="form-group">\
                                    <div class="row">\
                                        <div class="col-md-4">\
                                            User name:\
                                        </div>\
                                        <div class="col-md-4">\
                                            <label class="label label-default">User name</label>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="form-group">\
                                    <div class="row">\
                                        <div class="col-md-4">\
                                            Email:\
                                        </div>\
                                        <div class="col-md-4">\
                                            <label class="label label-default">Email</label>\
                                        </div>\
                                    </div>\
                                </div>\
                                <input class="btn btn-lg btn-primary btn-block" type="submit" value="Modify" />\
                            </fieldset>\
                        </form>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
    ');

})();