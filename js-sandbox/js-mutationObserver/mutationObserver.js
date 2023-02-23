'use strict';

// * MutationObserver is a built-in object that observes a DOM element and fires a callback when it detects a change

// * Syntax
// let observer = new MutationObserver(callback);
// observer.observe(node, config);

// config is an objet with boolean options "what kind of changes to react on"

// * After any changes, the callback is executed: changes are passed in the first argument as a list of MutationRecord objects, and the observer itself as the second argument

// * MutationRecord object have properties:
// type
// target 
// addedNodes / removedNodes
// previousSibling / nextSibling
// attributeName / attributeNamespace / oldValue
// ...