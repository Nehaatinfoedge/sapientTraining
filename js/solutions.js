---------------------------------------------------------------------------
Q1
---------------------------------------------------------------------------
var arr = [13,11,12,8,6,13];
function findSecondSmallElement(input){
	if(input.constructor === Array && input.length){
		var small1 = input[0];
		var small2 = input[1];
		for(var index=2;index<input.length;index++){
			if(input[index] < small1){
				if(input[index] < small2){
					small2 = small1;
					small1 = input[index];
					
				}
				else {
					small1 = small2;
					small2 = input[index];
					
				}
			}
		}
		console.log(small1,small2)
		var arr = [];
		arr[0]=small1;
		arr[1]=small2;
		return arr;
	}
	
}
var t = findSecondSmallElement(arr);
console.log("smallest and second smallest element in the array are >>>>",t);

var str = "aabbccdde";
function calculateuniqueCharacter(input){
	if(input == "")
		return false;
	var Arr = input.split("")
		, result={}
		, out = [];
	for(var i=0;i<Arr.length;i++){
		if(result[Arr[i]]==undefined)
			result[Arr[i]] = 1;
		else
			result[Arr[i]] = result[Arr[i]] + 1;
	}

  console.log(result);
  $.each(result,function(k,v){
  	if(v==1)
  		out.push(k);
  });
  return out;
}
var u = calculateuniqueCharacter(str);
console.log("unique elements in the input are >>>>",u);

---------------------------------------------------------------------------
Q5
---------------------------------------------------------------------------
function firstNonRepeatedCharacter(string) {
    for (var i = 0; i < string.length; i++) {
        var c = string.charAt(i);
        if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
            return c;
        }
    }
    return null;
}

var someString = 'aabcbd';
console.log(firstNonRepeatedCharacter(someString));
---------------------------------------------------------------------------
Q6
---------------------------------------------------------------------------

function longest_substring_without_repeating_characters(input) {
	var chars = input.split('');
	var curr_char;
	var str = "";
	var longest_string = "";
	var hash = {};
	for (var i = 0; i < chars.length; i++) {
		curr_char = chars[i];
		if (!hash[chars[i]]) 
		{ 
			str += curr_char; 
			hash[chars[i]] = {index:i};
		}
		else 
		{
			if(longest_string.length <= str.length)
			{
				longest_string = str;
			}
			var prev_dupeIndex = hash[curr_char].index;
			var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
			str = str_FromPrevDupe + curr_char;
			hash = {};
			for (var j = prev_dupeIndex + 1; j <= i; j++) {
				hash[input.charAt(j)] = {index:j};
			}
		}
	}
	return longest_string.length > str.length ? longest_string : str;
}
console.log(longest_substring_without_repeating_characters("google.com")); 

console.log(longest_substring_without_repeating_characters("example.com"));



------------------------------------------------------------------------------------------------------------------------------------------------------------------
Q9) Largest palindrome in a given string
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

function is_Palindrome(str1) {
	var rev = str1.split("").reverse().join("");
	return str1 == rev;
}

function longest_palindrome(str1){

	var max_length = 0,
	maxp = '';

	for(var i=0; i < str1.length; i++) 
	{
		var subs = str1.substr(i, str1.length);

		for(var j=subs.length; j>=0; j--) 
		{
			var sub_subs_str = subs.substr(0, j);
			if (sub_subs_str.length <= 1)
				continue;
			if (is_Palindrome(sub_subs_str))
			{
				if (sub_subs_str.length > max_length) 
				{
					max_length = sub_subs_str.length;
					maxp = sub_subs_str;
				}
			}
		}
	}

	return maxp;
}
console.log(longest_palindrome("noon is redder"));

console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));

---------------------------------------------------------------------------------------------------------------------------------------
Q3) Set of anagrams of list of words. The output should be words which are anagrams from the list should be grouped together.
----------------------------------------------------------------------------------------------------------------------------------------

function FindAllPermutations(str, index, buffer) {
    if (typeof str == "string")
        str = str.split("");
    if (typeof index == "undefined")
        index = 0;
    if (typeof buffer == "undefined")
        buffer = [];
    if (index >= str.length)
        return buffer;
    for (var i = index; i < str.length; i++)
        buffer.push(ToggleLetters(str, index, i));
    return FindAllPermutations(str, index + 1, buffer);
}

function ToggleLetters(str, index1, index2) {
    if (index1 != index2) {
        var temp = str[index1];
        str[index1] = str[index2];
        str[index2] = temp;
    }
    return str.join("");
}

var arrAllPermutations = FindAllPermutations("the");

---------------------------------------------------------------------
Q20) Find if a given number is Armstrong number 
----------------------------------------------------------------------

function armstr(num)
{
	var arm=0,a,b,c,d;

	temp=num;
	while(temp>0)
	{
		a=temp%10;
		temp=parseInt(temp/10); // convert float into Integer
		arm=arm+a*a*a;
	}
	if(arm==num)
	{
		alert("Armstrong number");
	}
	else
	{
		alert("Not Armstrong number");
	}
}
armstr(371); // armstrogn number

-----------------------------------------------------------------------------------
Q17) Find the nth Number in fibonacci series using Iterative and Recursive Approach
-----------------------------------------------------------------------------------

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));

 --------------------------------------------------------------------------------------
 Q15) Check if a number is a power of another number
 --------------------------------------------------------------------------------------

 /* Returns 1 if y is a power of x */
function isPower(x,y)
{
   // The only power of 1 is 1 itself
   if (x == 1)
     return (y == 1);
 
   // Repeatedly comput power of x
   var pow = 1;
   while (pow < y)
      pow *= x;
 
   // Check if power of x becomes y
   return (pow == y);
}

var output = isPower(2,128);
console.log(output);

-----------------------------------------------------------------------------------------------------------------
18) Given node in Binary Search tree, write the implementation for Put , Contains and InOrder methods.
-----------------------------------------------------------------------------------------------------------------

// Node class
class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// Binary Search tree class
class BinarySearchTree
{
    constructor()
    {
        // root of a binary seach tree
        this.root = null;
    }
 
 	// helper method which creates a new node to 
	// be inserted and calls insertNode
	insert(data)
	{
	    // Creating a node and initailising 
	    // with data 
	    var newNode = new Node(data);
	                     
	    // root is null then node will
	    // be added to the tree and made root.
	    if(this.root === null)
	        this.root = newNode;
	    else
	 
	        // find the correct position in the 
	        // tree and add the node
	        this.insertNode(this.root, newNode);
	}
 
	// Method to insert a node in a tree
	// it moves over the tree to find the location
	// to insert a node with a given data 
	insertNode(node, newNode)
	{
	    // if the data is less than the node
	    // data move left of the tree 
	    if(newNode.data < node.data)
	    {
	        // if left is null insert node here
	        if(node.left === null)
	            node.left = newNode;
	        else
	 
	            // if left is not null recurr until 
	            // null is found
	            this.insertNode(node.left, newNode); 
	    }
	 
	    // if the data is more than the node
	    // data move right of the tree 
	    else
	    {
	        // if right is null insert node here
	        if(node.right === null)
	            node.right = newNode;
	        else
	 
	            // if right is not null recurr until 
	            // null is found
	            this.insertNode(node.right,newNode);
	    }
	}
	// helper method that calls the 
	// removeNode with a given data
	remove(data)
	{
	    // root is re-initialized with
	    // root of a modified tree.
	    this.root = this.removeNode(this.root, data);
	}
	 
	// Method to remove node with a 
	// given data
	// it recurrs over the tree to find the
	// data and removes it
	removeNode(node, key)
	{
	         
	    // if the root is null then tree is 
	    // empty
	    if(node === null)
	        return null;
	 
	    // if data to be delete is less than 
	    // roots data then move to left subtree
	    else if(key < node.data)
	    {
	        node.left = this.removeNode(node.left, key);
	        return node;
	    }
	 
	    // if data to be delete is greater than 
	    // roots data then move to right subtree
	    else if(key > node.data)
	    {
	        node.right = this.removeNode(node.right, key);
	        return node;
	    }
	 
	    // if data is similar to the root's data 
	    // then delete this node
	    else
	    {
	         // deleting node with no children
	        if(node.left === null && node.right === null)
	        {
	            node = null;
	            return node;
	        }
	 
	        // deleting node with one children
	        if(node.left === null)
	        {
	            node = node.right;
	            return node;
	        }
	         
	        else if(node.right === null)
	        {
	            node = node.left;
	            return node;
	        }
	 
	        // Deleting node with two children
	        // minumum node of the rigt subtree
	        // is stored in aux
	        var aux = this.findMinNode(node.right);
	        node.data = aux.data;
	 
	        node.right = this.removeNode(node.right, aux.data);
	        return node;
	    }
	 
	}
	// Performs inorder traversal of a tree
	inorder(node)
	{
	    if(node !== null)
	    {
	        this.inorder(node.left);
	        console.log(node.data);
	        this.inorder(node.right);
	    }
	}
	// Performs preorder traversal of a tree    
	preorder(node)
	{
	    if(node != null)
	    {
	        console.log(node.data);
	        this.preorder(node.left);
	        this.preorder(node.right);
	    }
	}
	// Performs postorder traversal of a tree
	postorder(node)
	{
	    if(node != null)
	    {
	        this.postorder(node.left);
	        this.postorder(node.right);
	        console.log(node.data);
	    }
	}
	//  finds the minimum node in tree
	// searching starts from given node
	findMinNode(node)
	{
	    // if left of a node is null
	    // then it must be minimum node
	    if(node.left === null)
	        return node;
	    else
	        return this.findMinNode(node.left);
	}
	// returns root of the tree
	getRootNode()
	{
	    return this.root;
	}
	// search for a node with given data
	search(node, data)
	{
	   // if trees is empty return null
	    if(node === null)
	        return null;
	 
	    // if data is less than node's data
	    // move left
	    else if(data < node.data)
	        return this.search(node.left, data);
	 
	    // if data is less than node's data
	    // move left
	    else if(data > node.data)
	        return this.search(node.right, data);
	 
	    // if data is equal to the node data 
	    // return node
	    else
	        return node;
	}
    // function to be implemented
    // insert(data)
    // remove(data)
                 
 
    // Helper function
    // findMinNode()
    // getRootNode()
    // inorder(node)
    // preorder(node)               
    // postorder(node)
    // search(node, data)
}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();
 
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
var root = BST.getRootNode();
BST.inorder(root);
BST.remove(5);
var root = BST.getRootNode();
// prints 7 9 10 13 15 17 22 25 27
BST.inorder(root);
             
// Removing node with one children 
BST.remove(7);
var root = BST.getRootNode();
 
// prints 9 10 13 15 17 22 25 27
BST.inorder(root);
             
// Removing node with two children 
BST.remove(15);
var root = BST.getRootNode();
console.log("inorder traversal");
 
// prints 9 10 13 17 22 25 27
BST.inorder(root);
             
console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);
BST.search(15,17);


----------------------------------------------------------------------------------
19) Write a method for ATOI functionality (ASCII to Integer conversion)
----------------------------------------------------------------------------------

function atoi(str) {
  var last = str[str.length-1].charCodeAt(0) - 48;
  var last = (str[0] == "-" && last * -1) || last
  var new_str = str.slice(0,str.length-1);
  return (new_str != "" && new_str != "-") && (10 * atoi(new_str) + last) || last;
};

-----------------------------------------------------------------------------------------------------
26) prime factorization example :- if no. is 12 prime factor [2,2,3], no. is prime factor [2,2,2]
-----------------------------------------------------------------------------------------------------

 
var primeFactorization = function primeFactorization(number, result) {
  var result = (result || []);
  var root = Math.sqrt(number);
  var x = 2;

  if (number % x) {
    x = 3;

    while ((number % x) && ((x = (x + 2)) < root)) {}
  }

  x = (x <= root) ? x : number;

  result.push(x);

  return (x === number) ? result : primeFactorization((number / x), result);
};

Math.primeFactorization = primeFactorization;


 console.log(primeFactorization(12));


-----------------------------------------------------------------------------------------------------------------------
28) find dot product
-----------------------------------------------------------------------------------------------------------------------

function dotp(x,y) {
    function dotp_sum(a,b) { return a + b; }
    function dotp_times(a,i) { return x[i] * y[i]; }
    if (x.length != y.length)
        throw "can't find dot product: arrays have different lengths";
    return x.map(dotp_times).reduce(dotp_sum,0);
}
 
dotp([1,3,-5],[4,-2,-1]); // ==> 3

-----------------------------------------------------------------------------------------------------------------
34) find lonest word in given dictionary
   example : dictionary is : {"to","toe","toes","doe","dog","god","dogs","book","banana"} and input String is "dsetog"
            output : toes, dogs

-----------------------------------------------------------------------------------------------------------------

function isSubsequenceOf(sequence, word) {
  if (typeof sequence !== "string") { console.log("error"); }
  if (typeof word !== "string") { console.log("error"); }

  
  for (character of word)
  {
  	sequenceIndex = 0;
    characterFound = false;
    while (!characterFound)
    {
      if (sequenceIndex >= sequence.length)
      { return false; }

      if (character === sequence[sequenceIndex])
      { characterFound = true; }

      sequenceIndex++;
    }
  }
  return true;
}

input = "dsetog";
dictionary = ["to","toe","toes","doe","dog","god","dogs","book","banana"];

input = "abppplee";
dictionary = ["able", "ale", "apple", "bale", "kangaroo"];

console.log();
console.log("Input: ", input);
console.log("Dictionary: ", dictionary);

// dictionary = dictionary.filter(
//   function isLongerThanInput(word)
//   {
//     return word.length <= input.length;
//   }
// );
//
// console.log();
// console.log("Filtered Dictionary: ", dictionary);

dictionary.sort(
  function compareStringByLength(a,b) {
    if (a.length > b.length) { return -1; }
    if (a.length < b.length) { return 1; }
    return 0;
  }
);

console.log();
console.log("Sorted Dictionary: ", dictionary);
var len = 0;
for (word of dictionary)
{
  if (isSubsequenceOf(input, word))
  {
  	if(len<=word.length){
  		len = word.length;
    	console.log();
    	console.log("Solution: ", word);
    	
    }else{break;}
  }
}

console.log();
console.log(" === END === ");



-------------------------------------------------------------------------------------------------
35) reverse LinkedList
-------------------------------------------------------------------------------------------------

function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList(node) {
	if (node) {
        this.head = node;
    } else {
        this.head = null;
    }
    this._length = 0;
}

SinglyList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;
 
    // 1st use-case: an empty list 
    if (!currentNode) {
        this.head = node;
        this._length++;
         
        return node;
    }
 
    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
 
    currentNode.next = node;
 
    this._length++;
     
    return node;
};

SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
 
    // 1st use-case: an invalid position 
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: a valid position 
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
};

SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
 
    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;
         
        return deletedNode;
    }
 
    // 3rd use-case: any other node is removed
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }
 
    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;
 
    return deletedNode;
};

SinglyList.prototype.print = function(){

	var arr = [];
    var current = this.head;
    while (current !== null) {
        arr.push(current.data.data);
        current = current.next;
    }
    console.log(arr.join(' '));
}


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/* Iterative */
SinglyList.prototype.reverseList = function() {
    var result = null;
    var stack = [];
    
    var current = this.head;
    while (current) {
        stack.push(current.data.data);
        current = current.next;
    }
    
    // Set head to end of list.
    result = stack.pop() || [];
    current = result;
    
    while (current) {
        current.next = stack.pop();
        current = current.next;
    }

    return result;
};

/* Recursive */
SinglyList.prototype.reverseListRecursive = function() {
  if (this.head === null || this.head.next === null) {
        return;
    }
    var first = this.head;
    var rest = new SinglyList(this.head.next);
    rest.reverseListRecursive();
    first.next.next = first;
    first.next = null;
    this.head = rest.head;
}

var list = new SinglyList();
list.add(new Node(4));
list.add(new Node(3));
list.add(new Node(2));
list.add(new Node(1));
list.print();

list.reverseListRecursive();
list.print();

----------------------------------------------------------------------------------------------------------------------------------------
22) find number whether given no. is power of 10 or not. Example :- 100(10^2), 1000 (10^3), 0.1 (10^-1), 0.01(10^-2)
----------------------------------------------------------------------------------------------------------------------------------------

function isPowerOf10(input){
	if(!input){
		console.log("Please enter valid input");	}
	while (input > 9 && input % 10 == 0) {
  		input /= 10;
  	}
	return (input == 1)?1:0;
}
isPowerOf10(100);

----------------------------------------------------------------------------------------------------------------------------------------
29) optimal path
----------------------------------------------------------------------------------------------------------------------------------------

var res = "";
function Graph() {
  var neighbors = this.neighbors = {}; // Key = vertex, value = array of neighbors.

  this.addEdge = function (u, v) {
    if (neighbors[u] === undefined) {  // Add the edge u -> v.
      neighbors[u] = [];
    }
    neighbors[u].push(v);
    if (neighbors[v] === undefined) {  // Also add the edge v -> u in order
      neighbors[v] = [];               // to implement an undirected graph.
    }                                  // For a directed graph, delete
    neighbors[v].push(u);              // these four lines.
  };

  return this;
}

function bfs(graph, source) {
  var queue = [ { vertex: source, count: 0 } ],
      visited = { source: true },
      tail = 0;
  while (tail < queue.length) {
    var u = queue[tail].vertex,
        count = queue[tail++].count;  // Pop a vertex off the queue.
    print('distance from ' + source + ' to ' + u + ': ' + count);
    graph.neighbors[u].forEach(function (v) {
      if (!visited[v]) {
        visited[v] = true;
        queue.push({ vertex: v, count: count + 1 });
      }
    });
  }
}

function shortestPath(graph, source, target) {
  if (source == target) {   // Delete these four lines if
    print(source);          // you want to look for a cycle
    return;                 // when the source is equal to
  }                         // the target.
  var queue = [ source ],
      visited = { source: true },
      predecessor = {},
      tail = 0;
  while (tail < queue.length) {
    var u = queue[tail++],  // Pop a vertex off the queue.
        neighbors = graph.neighbors[u];
    for (var i = 0; i < neighbors.length; ++i) {
      var v = neighbors[i];
      if (visited[v]) {
        continue;
      }
      visited[v] = true;
      if (v === target) {   // Check if the path is complete.
        var path = [ v ];   // If so, backtrack through the path.
        while (u !== source) {
          path.push(u);
          u = predecessor[u];
        }
        path.push(u);
        path.reverse();
        print(path.join(' &rarr; '));
        return;
      }
      predecessor[v] = u;
      queue.push(v);
    }
  }
  print('there is no path from ' + source + ' to ' + target);
}

function print(s) {  // A quick and dirty way to display output.
  s = s || '';
  document.getElementById('display').innerHTML += s + '<br>';
}

window.onload = function () {
  var graph = new Graph();
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('B', 'E');
  graph.addEdge('C', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('C', 'G');
  graph.addEdge('D', 'E');
  graph.addEdge('E', 'F');

  bfs(graph, 'A');
  print();
  shortestPath(graph, 'B', 'G');
  print();
  shortestPath(graph, 'G', 'A');
};

--------------------------------------------------------------------------------------------------------------------------------
31) walking robot  
 Problem statement
 Given a robot which can only move in four directions, UP(U), DOWN(D), LEFT(L), RIGHT(R). Given a string consisting of instructions to move.
  Output the co-ordinates of robot after the executing the instructions. Initial position of robot is at origin(0, 0).

Examples:

Input : move = "UDDLRL" 
Output : (-1, -1)
Move U : (0, 0)--(0, 1)
Move D : (0, 1)--(0, 0)
Move D : (0, 0)--(0, -1)
Move L : (0, -1)--(-1, -1)
Move R : (-1, -1)--(0, -1)
Move L : (0, -1)--(-1, -1)

Therefore final position after the complete
movement is: (-1, -1)

Input : move = "UDDLLRUUUDUURUDDUULLDRRRR"
Output : (2, 3) 

--------------------------------------------------------------------------------------------------------------------------------

var input = "UDDLLRUUUDUURUDDUULLDRRRR";
function findFinalOutputOfRobot(input){
	var obj = {x:0,y:0};
	var str = input.split("");
	if(input=''){
		console.log("Please enter valid input");
		return false;
	}
	for(var i=0;i<str.length;i++){
		if(['U','D','L','R'].indexOf(str[i])===-1){
			console.log("Please enter valid movement");
			return false;
		}
		switch(str[i]) {
			case 'U':
				obj.y += 1;
			break;
			case 'D':
				obj.y += -1;
			break;
			case 'L':
				obj.x += -1;
			break;
			case 'R':
				obj.x += 1;
			break;
		}
	}
	return obj;
}

var result = findFinalOutputOfRobot(input);
console.log(result);

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
24)  /* Problem Name is &&& Square Root &&& PLEASE DO NOT REMOVE THIS LINE. */
 
* Instructions to Candidate
* This is **NOT** a math problem. You are required to code up a simple mathematical technique to find the square root of a number.
* The Newton-Raphson method can be used to find the square root of a number N as follows
    ** Make an initial guess
    ** Update the guess using the below formula
    ** New Estimate = Current Estimate - ( F(Current Estimate) / F'(Current Estimate) ), where
     F(Current Estimate) = Current Estimate * Current Estimate - N
     F'(Current Estimate) = 2*Current Estimate
    ** Repeat till you are close enough
* Run this code in the REPL to observe its behaviour. The
   execution entry point is main().

/*One approach is to use Newton's Method, which provides a convergent numerical approximation (with the caveat that you 
choose an initial guess that is 'close enough' to the real solution; in this sense, doing so for large numbers gets more difficult).

Newton's Method is based upon finding roots of a function f(x). To see how this applies to square or cube roots, suppose
 that y=n−−√ for some fixed n. Well, then this y would be a root of the equation f(x)=x2−n. Similarly, f(x)=x3−n would provide 
 us with a way to calculate the cube root of n.

Newton's Method works as follows: start with an initial guess x0, and then, for each n, define xn+1:=xn−f(xn)f′(xn).

Take the simple example of calculating 10−−√. We use f(x)=x2−10 with Newton's Method to find this. In this case, f′(x)=2x. 
Letting out initial guess be x0=3 (32=9 which is close to 10), we have x1=3−32−102(3)=3+1/6=19/6. Then x2=19/6−(19/6)2−1019/3≈3.16228. For comparison, 
10−−√≈3.162277, which is already very close to 3.16228.*/
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function sqrt(x){
  
  function mean(a,b){
    return (a + b) / 2
  }

  function newEstimate(estimate){
    return mean( estimate, x / estimate )
  }

  function isAproxRoot(estimate){
    return Math.abs(estimate * estimate -x) <= 0.01
  }
  
  function iterate(estimate){
    return isAproxRoot(estimate) ? estimate : iterate(newEstimate(estimate))
  }

  return iterate(1);
  
}
sqrt(10);


/*function sqrt(x){
	var i =1;
	function calculateOne(num){
		return Math.abs((num*num)-x);
	}
	function calculateTwo(num){
		return Math.abs(2*num);
	}
	function iterate(i){
		var x1 = calculateOne(i);
		var x2 = calculateTwo(1);
		return (Math.abs(i-((x1)/(x2))))<=0.01?Math.abs(i-((x1)/(x2))):iterate(Math.abs(i-((x1)/(x2))));
	}
	return iterate(i);

}
sqrt(10);*/
-----------------------------------------------------------------------------------------------------
14) Missing characters to make a string Pangram 
-----------------------------------------------------------------------------------------------------

function missingChars(input){
	var present = []
		, missing = [];
	var s = 'a';
	var smallACharCode = (s.charCodeAt(0));
	s = 'z';
	var smallZCharCode = (s.charCodeAt(0));
	s = 'A';
	var capitalACharCode = (s.charCodeAt(0));
	s = 'Z';
	var capitalZCharCode = (s.charCodeAt(0));
	if(input=='')
		return false;
	var arr = input.split("");
	if(smallACharCode< smallZCharCode){
		var source = smallACharCode;
		var target = smallZCharCode;
	}
	else
	{
		var source = smallZCharCode;
		var target =  smallACharCode;
	}
	
	for(var i = source;i<target;i++){
		var charTobeChecked = String.fromCharCode(i);
		if(arr.indexOf(charTobeChecked) !== -1){
			present.push(charTobeChecked);
		}
		else{
			missing.push(charTobeChecked)
		}

	}
	if(capitalACharCode< capitalZCharCode){
		var source = capitalACharCode;
		var target = capitalZCharCode;
	}
	else
	{
		var source = capitalZCharCode;
		var target =  capitalACharCode;
	}
	
	for(var i = source;i<target;i++){
		var charTobeChecked = String.fromCharCode(i);
		if(arr.indexOf(charTobeChecked) !== -1){
			present.push(charTobeChecked);
		}
		else{
			missing.push(charTobeChecked)
		}

	}
	
	console.log(present);
	console.log(missing);
}
var str = "The quick brown fox jumps "
                 "over the dog";
missingChars(str);

-------------------------------------------------------------------------------
16) Given Input,print the following input: “SSSSSTTPPQ”  Output: “5S2T2P1Q”.
-------------------------------------------------------------------------------

function printDesiredOutput(input){
	if(input=='')
		return false;
	var arr = input.split("");
	var present = {};
	var output = '';
	for(var i =0;i<arr.length;i++){
		var s = arr[i];
		if(present.hasOwnProperty(s)){
			present[s] = present[s] + 1;
		}
		else {
			present[s] = 1;
		}
	}
	console.log(present);
	for(key in present){
		output += present[key]+''+key;
	}
	return output;
	
}
var o  = printDesiredOutput("SSSSSTTPPQ");
console.log(o);


-------------------------------------------------------------------------------------------------
10) Return element from a Pascal Traingle - Given 5,2 as input return 2 nd element from 5th row 
-------------------------------------------------------------------------------------------------
'use strict';

function createPascalTriangle (numRows) {
	this.numRows = numRows;
	this.pascalTriangle = [];
};
createPascalTriangle.prototype.create = function(){
  for (var i = 0; i < this.numRows; i++) { 
    this.pascalTriangle[i] = new Array(i+1);
    
    for (var j = 0; j < i+1; j++) {            
      if (j === 0 || j === i) {
        this.pascalTriangle[i][j] = 1;
      } else {
        this.pascalTriangle[i][j] = this.pascalTriangle[i-1][j-1] + this.pascalTriangle[i-1][j];
      }
    }
  }
  return this.pascalTriangle;
}

createPascalTriangle.prototype.search = function(x,y){
	return this.pascalTriangle[x][y];
}
var p = new createPascalTriangle(6);
console.log(p.create());
console.log(p.search(2,1));


-------------------------------------------------------------------------------------------------------------------------------------------------------------------
11) Given a String “aabbbbddcc” find the longest first repeating index and its length.  (Input: “aabbbbddcc”  Output: [2,4] 2 is the index and 4 is the length).
-------------------------------------------------------------------------------------------------------------------------------------------------------------------