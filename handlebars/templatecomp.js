(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "        <tr> \r\n            <td>"
    + alias3((helpers.fullName || (depth0 && depth0.fullName) || alias2).call(alias1,(depth0 != null ? depth0.person : depth0),{"name":"fullName","hash":{},"data":data}))
    + "</td> \r\n            <td>"
    + alias3(((helper = (helper = helpers.jobTitle || (depth0 != null ? depth0.jobTitle : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"jobTitle","hash":{},"data":data}) : helper)))
    + "</td> \r\n            <td><a href=\"https://twitter.com/"
    + alias3(((helper = (helper = helpers.twitter || (depth0 != null ? depth0.twitter : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"twitter","hash":{},"data":data}) : helper)))
    + "\">@"
    + alias3(((helper = (helper = helpers.twitter || (depth0 != null ? depth0.twitter : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"twitter","hash":{},"data":data}) : helper)))
    + "</a></td> \r\n        </tr> \r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table>\r\n    <thead> \r\n        <th>Name</th> \r\n        <th>Job Title</th> \r\n        <th>Twitter</th> \r\n    </thead> \r\n    <tbody> \r\n";
  stack1 = ((helper = (helper = helpers.users || (depth0 != null ? depth0.users : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"users","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.users) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </tbody> \r\n</table> ";
},"useData":true});
})();