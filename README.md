# listBuild.js
## Build HTML lists from a data source
A (very!) simple JS script which will allow &lt ul &gt elements to be built from a data source.

### Usage:
To include within a webpage, simply add the script in your document:
```html
<script type="text/javascript" src="listBuild.js"></script>
```
Or, in node, require the file:
```javascript
var listBuild = require('./listBuild.js');
```
Ensuring the path points correctly to listBuild.js

Once you have added the script you can build a list like so:
	buildList(["Dave", "Betty", "Edward"]);
Will return:
```html	
	<ul>
		<li>Dave</li>
		<li>Betty</li>
		<li>Edward</li>
	</ul>
```