## Bootswitch.
This plugin created for Bootstrap Button Groups. It's only 2kb! (1kb when minified :] ) You can create switchable buttons with hidden inputs. Fully customizeable with options:

### Usage
You need jQuery, Bootstrap, and plugin js file.

```
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
<script src="yoursitepath/bootswitch.min.js"></script>
```
After that you can simply insert this code

```
 <script>
 	jQuery(document).ready(function($) {
 		$('.btn-group').bootswitch();	
 	});
 </script>
```
Your bootstrap button group should be;
```
<div class="btn-group ne" data-target="#showm" data-toggle="buttons-radio">
	<button type="button" class="btn btn-info yes" data-toggle="button">Yes</button>
	<button type="button" class="btn btn-info no" data-toggle="button">No</button>
</div>

<input type="hidden" id="showm" class="form-control" />
```

###Plugin Options & Default Values

You can customize plugin with this options. The options;
```
{
	object: this, //the value 'class' of button group. generally '.btn-group'
	positive: '.yes', //positive div (button) (should be class or id)
	negative: '.no', //negative div (button) (should be class or id)
	posval: 'yes', //positive button value (should be string or integer)
	negval: 'no', //negative button value (should be string or integer)
	input: '#showm' //target input id
}
```

### Plugin Usage With Options
```
 <script>
 	jQuery(document).ready(function($) {
 		$('.btn-group').bootswitch({
			positive: '.yes',
			negative: '.no',
			posval: 'yes',
			negval: 'no',
			input: '#showm'
 		});	
 	});
 </script>
```
###DEMO
For Demo [Click here](http://wpadami.com/jquery/bootswitch)
