# Havok.JS Overview
#### Havok.js is a plugin that handles your html form submission, verification as well as response processing via ajax.
##### Requirements
1. Latest JQuery plugin.
2. Latest Bootstrap CSS and JS (required for tooltips)

#### initialize havok.js
 Simply Include this in your footer

	 <script type="text/javascript" src="path/to/havok/init.js"></script>

You will also need an additional CSS file reference in your header, for hidden-aspect css class

	<link rel="stylesheet" href="path/to/havok/init.css">


If you append new HTML after the document has loaded, you can bind any new forms by calling

	
	<script type="text/javascript">
	 bindHO();
	</script>

You can set any dom object to be a form as long as it can contain children.
```
	
	<ul class="list-group marker" path="/submit/path">
	<!-- Turn dom into form by adding marker to the class attribute -->
	<li class="list-group-item">
	<h2> Form Header </h2>
	</li>
	<li class="list-group-item required loader-form">
	<!-- Include any type of input except file by adding xsub as class -->
	<input class="form-control required xsub" type="text" placeholder="Username" name="postname" >
	</li>
	<li class="list-group-item loader-form">
	<input class="form-control required xsub" type="password" placeholder="Password" name="postname" >
	</li>
	
	<li class="list-group-item hidden-aspect loader">
	<span class="fa  fa-spin fa-cog"></span>
	
	</li>
	
	<li class="list-group-item">
	<!-- marker > .loader-result will show your server response -->
	<div class="loader-result">
	
	</div>
	<!-- add Dosub to clickable objet to submit form, see psub for in change submit -->
	<button class="btn btn-primary dosub"> Login </button>
	</li>
	</ul>
```

## Misc. Examples
### On change form submit
	<div class="psub" path="/submit/to">
	<!-- Submits on input change, use isub for checkbox -->
	<input class="xsub" type="text" name="variablename">
	<div class="alert-stored">
	
	</div> 
	<span class="fa loader-prog fa-spin fa-cog"></span>
	</div>
	
### Retrieving and appending data from dom click
#### .asub works in the same way except it submits to a different target div

	<div>
	<button class="strigger" path="/path/to/get"></button>
	</div>
	<div class="content-window">
	</div>
	
	
### Prefix url with self submission
<div class="prefixsub" target=".targetdom" prefix="/sample/prefix">
<button class="selfsub" path="/food"></button>
</div>

> On Click shoud be  GET /sample/prefix/food

Afterwards the data should append to **.targetdom**

## Class reference
1. marker : Parent DOM with xsub, loader-result,dosub as it's child classes. This tells Havok.js that this is a form.
2. loader-form : Havok.js hides these dom objects until the request is finished
3. required : The form will not be submitted until that field is filled. if the proper tags are included it should highlight in red with a tooltip stating its required.
4. xsub : The actual input that is submitted, please make sure the 'name' attribute is set.
5. hidden-aspect : This element is hidden
6. loader : Combined with hidden aspect will pop out and disappear upon completion of your request. 
7. strigger : Will GET path and append data to all dom elements with the class content-window
8. content-window: Target DOM to append data
9. xtrigger : will GET path and append data to a Bootstrap modal with ID 'xmodal' as well as present it. (Please make sure bootstrap is included in your page)
10. psub : Acts as marker, however its xsub children submit on input change. The server response is appended to alert-stored
11. alert-stored : Server responses are saved there
12. asub: Works with clickable DOM elements, submits request to path attribute of element and append data to .alert-stored
13. loader-prog : Used as loader while psub,xtrigger,asub, strigger is being called.
14. prefixsub : Acts as a link controller from a group of clickable dom elements with the class selfsub. Use attribute target to specify where the server response should be stored.
15. selfsub: Works with a prefixsub as a parent. It appends its parent's prefix attribute to its path attribute and then perform the request.

