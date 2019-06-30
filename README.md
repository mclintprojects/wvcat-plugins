# wvcat-plugins

## Overview

This repository contains all the community contributed plugins for WVCAT. Any plugin contributed to be merge into WVCAT will be vetted to ensure that they do not contain any malicious code.

## What is a plugin?

A plugin is essentially a collection of custom commands for a domain. WVCAT commands can be specific and target only a single web page on a domain or they can be general and target all the web pages on a domain. Plugins are intended to provide any functionality I forgot to provide out-of-the-box in WVCAT.

Example code for a google.com homepage plugin that performs a search and clicks the i'm feeling lucky button.

```javascript
{
		match: /https:\/\/www.google.com/g,
		commands: [
			{
				element: 'search-input',
				match: ['search for *query'],
				onmatch: function(query) {
					window.location.href = `https://www.google.com/search?q=${query}`;
				}
			},
			{
				element: 'im-feeling-button',
				match: ["i'm feeling lucky"],
				onmatch: function() {
					wvcat.execute("click i'm feeling lucky button");
				}
			}
		]
    }
```

|Plugin property|Type|Description|
|---|---|---|
|match|RegExp|A regex that will be matched against each web page a user navigates to. This ensures your command only runs on the web page(s) you intend for it to run on.|
|commands|Array[object]|An array of commands that a user will be able to perform.|
<br>

| Plugin command property | Type          | Description                                                                                                                                        |
| ----------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| element                 | String        | The name of the element a command is targeted at. When a user says 'show reference' on said element this command will be listed.                   |
| match                   | Array[String] | An array of the custom commands users will be able to speak.                                                                                       |
| onmatch                 | Function      | A callback function that is called when a user speaks a command that matches any of the custom commands you defined in the _match_ property above. |

### Defining a custom command

Custom commands are essentially text that users can say and have WVCAT perform an action corresponding to it on a web page. Custom commands can contain two types of parameters; named and splat. These values of these parameters will be passed into your command callback function.

#### Plain commands

These are commands that contain no parameters. They're all text. Example: "Download ebook", "Logout", "Reset".

#### Commands with named parameters

Named parameters are defined with a colon preceding the parameter. Example: "Search for a :color car", "Search for emails containing :query and :query2".<br>
NB: You can have multiple named parameters in a custom command.

#### Commands with splat parameters

Splat parameters are defined with a preceding asterisk(*). Example: "Search for *query", "Search for :job in \*location".<br>
NB: You can define only one splat parameter in a custom command and it must be the last parameter defined.

## Contributing a plugin

1. Create a new issue using the new plugin template and add the `new-plugin` tag to it.
2. Assign a reviewer to the issue and wait.
3. A reviewer will review your contribution and merge it in.
