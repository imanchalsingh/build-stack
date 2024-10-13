// E-LearningPlatform.tsx
import React, { useState } from "react";
import {
  Button,
  Card,
  Typography,
  Box,
  Checkbox,
  Container,
  CssBaseline,
} from "@mui/material";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";
import { Document, Page, Text, pdf } from "@react-pdf/renderer";
import DownloadIcon from "@mui/icons-material/Download";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Types
type Course = {
  id: number;
  title: string;
  description: string;
  quizzes: QuizQuestion[];
};
type QuizQuestion = { question: string; options: string[]; answer: string };
type Progress = { completedModules: number; totalModules: number };

// Initial State
const initialState = {
  courses: [
    {
      id: 1,
      title: "Python for Data Science",
      description: "Explore data science with Python.",
      quizzes: [
        {
          question: "What is Python primarily used for?",
          options: ["Web Development", "Data Science", "Game Development"],
          answer: "Data Science",
        },
        {
          question: "Which library is used for data manipulation in Python?",
          options: ["Pandas", "NumPy", "Matplotlib"],
          answer: "Pandas",
        },
        {
          question:
            "What data structure is used to store a collection of items in Python?",
          options: ["List", "Array", "Tuple"],
          answer: "List",
        },
        {
          question: "Which of the following is a Python web framework?",
          options: ["Django", "Flask", "Both"],
          answer: "Both",
        },
        {
          question:
            "What function is used to read input from the user in Python?",
          options: ["input()", "read()", "get_input()"],
          answer: "input()",
        },
        {
          question: "Which operator is used for exponentiation in Python?",
          options: ["^", "**", "exp"],
          answer: "**",
        },
        {
          question:
            "Which of the following is a valid variable name in Python?",
          options: ["1st_variable", "firstVariable", "first-variable"],
          answer: "firstVariable",
        },
        {
          question: "What keyword is used to define a function in Python?",
          options: ["function", "def", "define"],
          answer: "def",
        },
        {
          question: "What is the output of print(2 * 3 ** 2)?",
          options: ["12", "18", "6"],
          answer: "18",
        },
        {
          question:
            "Which method is used to add an element to a list in Python?",
          options: ["add()", "append()", "insert()"],
          answer: "append()",
        },
      ],
    },
    {
      id: 2,
      title: "JavaScript Basics",
      description: "Learn the fundamentals of JavaScript.",
      quizzes: [
        {
          question: "What does 'DOM' stand for?",
          options: [
            "Document Object Model",
            "Data Object Model",
            "Document Operation Model",
          ],
          answer: "Document Object Model",
        },
        {
          question: "Which of the following is a JavaScript data type?",
          options: ["String", "Number", "Both"],
          answer: "Both",
        },
        {
          question:
            "What is the correct syntax to create a function in JavaScript?",
          options: [
            "function myFunction()",
            "create myFunction()",
            "myFunction: function()",
          ],
          answer: "function myFunction()",
        },
        {
          question: "How do you declare a variable in JavaScript?",
          options: ["var", "let", "const", "All of the above"],
          answer: "All of the above",
        },
        {
          question: "Which operator is used for equality in JavaScript?",
          options: ["==", "===", "Both"],
          answer: "Both",
        },
        {
          question: "What does 'NaN' stand for in JavaScript?",
          options: ["Not a Number", "Null and Not", "Number Not"],
          answer: "Not a Number",
        },
        {
          question:
            "Which method can be used to convert a string to a number in JavaScript?",
          options: ["parseInt()", "parseFloat()", "Both"],
          answer: "Both",
        },
        {
          question: "What will be the output of the expression 'typeof NaN'?",
          options: ["number", "NaN", "undefined"],
          answer: "number",
        },
        {
          question: "Which event occurs when a user clicks on an HTML element?",
          options: ["onclick", "onchange", "onmouseclick"],
          answer: "onclick",
        },
        {
          question: "How do you write an 'if' statement in JavaScript?",
          options: ["if i = 5 then", "if (i == 5)", "if i == 5"],
          answer: "if (i == 5)",
        },
      ],
    },
    {
      id: 3,
      title: "Java for Beginners",
      description: "Get started with Java programming.",
      quizzes: [
        {
          question: "Which keyword is used to create a class in Java?",
          options: ["class", "className", "create"],
          answer: "class",
        },
        {
          question: "What is the default value of a boolean variable in Java?",
          options: ["true", "false", "null"],
          answer: "false",
        },
        {
          question: "Which method is the entry point of a Java application?",
          options: ["main()", "start()", "run()"],
          answer: "main()",
        },
        {
          question: "What is the correct syntax for a while loop in Java?",
          options: ["while (i < 10)", "while i < 10", "while (i < 10);"],
          answer: "while (i < 10)",
        },
        {
          question:
            "Which of the following is a valid array declaration in Java?",
          options: ["int arr[];", "int arr;", "int[] arr;"],
          answer: "int arr[];",
        },
        {
          question: "How do you start a comment in Java?",
          options: ["//", "#", "/*"],
          answer: "//",
        },
        {
          question:
            "Which symbol is used for the 'instanceof' operator in Java?",
          options: ["==", "instanceof", "is"],
          answer: "instanceof",
        },
        {
          question:
            "What will be the output of the following code: System.out.println(10 + 20 + '30');?",
          options: ["1030", "30", "102030"],
          answer: "1030",
        },
        {
          question: "How do you declare a constant in Java?",
          options: [
            "final int x = 10;",
            "const int x = 10;",
            "constant int x = 10;",
          ],
          answer: "final int x = 10;",
        },
        {
          question: "What is the superclass of all classes in Java?",
          options: ["Object", "Class", "System"],
          answer: "Object",
        },
      ],
    },
    {
      id: 4,
      title: "C++ Fundamentals",
      description: "Learn the basics of C++ programming.",
      quizzes: [
        {
          question: "What does 'C++' stand for?",
          options: ["C Plus Plus", "C Increment", "C Plus"],
          answer: "C Plus Plus",
        },
        {
          question:
            "Which header file is required for input-output operations in C++?",
          options: [
            "#include <iostream>",
            "#include <stdio.h>",
            "#include <conio.h>",
          ],
          answer: "#include <iostream>",
        },
        {
          question:
            "What is the default access specifier for class members in C++?",
          options: ["public", "private", "protected"],
          answer: "private",
        },
        {
          question:
            "Which symbol is used to denote a single-line comment in C++?",
          options: ["//", "#", "/*"],
          answer: "//",
        },
        {
          question: "What is the size of an int in C++?",
          options: ["2 bytes", "4 bytes", "8 bytes"],
          answer: "4 bytes",
        },
        {
          question: "How do you declare a pointer in C++?",
          options: ["int *ptr;", "ptr int;", "int &ptr;"],
          answer: "int *ptr;",
        },
        {
          question: "What is the correct syntax for a for loop in C++?",
          options: [
            "for (int i = 0; i < 10; i++)",
            "for int i = 0; i < 10; i++",
            "for (i < 10; i++)",
          ],
          answer: "for (int i = 0; i < 10; i++)",
        },
        {
          question:
            "What is the output of the following code: cout << 5 + 10 + 'A';?",
          options: ["65", "75", "10"],
          answer: "75",
        },
        {
          question:
            "Which of the following is a valid function declaration in C++?",
          options: ["void function();", "function void();", "function(); void"],
          answer: "void function();",
        },
        {
          question: "Which operator is used for pointer dereferencing in C++?",
          options: ["*", "&", "->"],
          answer: "*",
        },
      ],
    },
    {
      id: 5,
      title: "Ruby for Beginners",
      description: "Get started with Ruby programming.",
      quizzes: [
        {
          question: "What does 'puts' do in Ruby?",
          options: ["Prints output", "Returns a value", "Creates a variable"],
          answer: "Prints output",
        },
        {
          question: "How do you declare a variable in Ruby?",
          options: ["var x = 10", "x = 10", "declare x = 10"],
          answer: "x = 10",
        },
        {
          question: "Which of the following is a loop structure in Ruby?",
          options: ["for", "while", "Both"],
          answer: "Both",
        },
        {
          question: "How do you create a method in Ruby?",
          options: [
            "def method_name",
            "method method_name",
            "create method_name",
          ],
          answer: "def method_name",
        },
        {
          question: "What is the output of '1 + 2' in Ruby?",
          options: ["3", "12", "Error"],
          answer: "3",
        },
        {
          question: "How do you create an array in Ruby?",
          options: [
            "array = [1, 2, 3]",
            "array = (1, 2, 3)",
            "array: [1, 2, 3]",
          ],
          answer: "array = [1, 2, 3]",
        },
        {
          question:
            "Which method is used to get the length of an array in Ruby?",
          options: ["length", "size", "Both"],
          answer: "Both",
        },
        {
          question: "What is the output of 'puts 5.class' in Ruby?",
          options: ["Integer", "Fixnum", "Number"],
          answer: "Integer",
        },
        {
          question: "How do you create a hash in Ruby?",
          options: [
            "hash = {key: value}",
            "hash = (key => value)",
            "hash: {key: value}",
          ],
          answer: "hash = {key: value}",
        },
        {
          question: "Which symbol is used for comments in Ruby?",
          options: ["#", "//", "/*"],
          answer: "#",
        },
      ],
    },
    {
      id: 6,
      title: "Go Programming Basics",
      description: "Learn the fundamentals of Go programming.",
      quizzes: [
        {
          question: "What is the file extension for Go files?",
          options: [".go", ".golang", ".g"],
          answer: ".go",
        },
        {
          question: "Which keyword is used to define a variable in Go?",
          options: ["var", "define", "let"],
          answer: "var",
        },
        {
          question: "What is a goroutine in Go?",
          options: ["A function", "A lightweight thread", "A type of variable"],
          answer: "A lightweight thread",
        },
        {
          question: "What is the zero value of an integer in Go?",
          options: ["0", "nil", "undefined"],
          answer: "0",
        },
        {
          question: "How do you start a new Go program?",
          options: ["package main", "package start", "start main"],
          answer: "package main",
        },
        {
          question: "What is the purpose of the 'defer' keyword in Go?",
          options: [
            "To delay execution",
            "To define a constant",
            "To create a variable",
          ],
          answer: "To delay execution",
        },
        {
          question: "What is the keyword used for creating a constant in Go?",
          options: ["const", "constant", "let"],
          answer: "const",
        },
        {
          question: "Which function is used to print to the console in Go?",
          options: ["println()", "print()", "log()"],
          answer: "println()",
        },
        {
          question: "What is the default visibility of a variable in Go?",
          options: ["Package", "Public", "Private"],
          answer: "Package",
        },
        {
          question: "How do you create a slice in Go?",
          options: ["var s []int", "s := []int{}", "slice s = int[]"],
          answer: "var s []int",
        },
      ],
    },
    {
      id: 7,
      title: "Kotlin for Android Development",
      description: "Learn Kotlin programming for Android development.",
      quizzes: [
        {
          question: "What is the file extension for Kotlin files?",
          options: [".kt", ".kotlin", ".java"],
          answer: ".kt",
        },
        {
          question: "Which keyword is used to define a variable in Kotlin?",
          options: ["var", "let", "const"],
          answer: "var",
        },
        {
          question: "What is the default visibility of a class in Kotlin?",
          options: ["public", "private", "protected"],
          answer: "public",
        },
        {
          question: "How do you create a function in Kotlin?",
          options: [
            "fun functionName()",
            "create functionName()",
            "function functionName()",
          ],
          answer: "fun functionName()",
        },
        {
          question: "What is the primary constructor in Kotlin?",
          options: [
            "A special constructor",
            "The first constructor",
            "A constructor without parameters",
          ],
          answer: "The first constructor",
        },
        {
          question: "How do you declare an array in Kotlin?",
          options: [
            "val array = arrayOf(1, 2, 3)",
            "array = [1, 2, 3]",
            "var array = new int[3]",
          ],
          answer: "val array = arrayOf(1, 2, 3)",
        },
        {
          question: "Which keyword is used for null safety in Kotlin?",
          options: ["!!", "?", "null"],
          answer: "?",
        },
        {
          question: "How do you define a data class in Kotlin?",
          options: [
            "data class Name(val property: Type)",
            "class Name(data property: Type)",
            "class Name(val property: Type)",
          ],
          answer: "data class Name(val property: Type)",
        },
        {
          question: "What is the keyword to define an interface in Kotlin?",
          options: ["interface", "abstract", "class"],
          answer: "interface",
        },
      ],
    },
    {
      id: 8,
      title: "Swift for iOS Development",
      description: "Learn Swift programming for iOS app development.",
      quizzes: [
        {
          question: "What is the file extension for Swift files?",
          options: [".swift", ".sw", ".s"],
          answer: ".swift",
        },
        {
          question: "How do you declare a constant in Swift?",
          options: [
            "let constantName = value",
            "const constantName = value",
            "constant constantName = value",
          ],
          answer: "let constantName = value",
        },
        {
          question: "What is an optional in Swift?",
          options: [
            "A variable that can hold no value",
            "A variable with multiple types",
            "A constant value",
          ],
          answer: "A variable that can hold no value",
        },
        {
          question: "Which keyword is used to create a function in Swift?",
          options: ["func", "function", "def"],
          answer: "func",
        },
        {
          question: "How do you create an array in Swift?",
          options: [
            "var array = [1, 2, 3]",
            "array: [1, 2, 3]",
            "let array = new int[3]",
          ],
          answer: "var array = [1, 2, 3]",
        },
        {
          question: "What is the output of 'print(5 + 2 * 3)' in Swift?",
          options: ["11", "21", "18"],
          answer: "11",
        },
        {
          question: "How do you declare a variable in Swift?",
          options: ["var variableName", "let variableName", "Both"],
          answer: "Both",
        },
        {
          question: "What does 'if let' do in Swift?",
          options: [
            "Unwraps an optional",
            "Creates an optional",
            "Initializes a variable",
          ],
          answer: "Unwraps an optional",
        },
        {
          question: "Which symbol is used for comments in Swift?",
          options: ["//", "#", "/*"],
          answer: "//",
        },
        {
          question: "What is a tuple in Swift?",
          options: [
            "A collection of values",
            "A type of array",
            "A constant value",
          ],
          answer: "A collection of values",
        },
      ],
    },
    {
      id: 9,
      title: "PHP Basics",
      description: "Learn the basics of PHP programming.",
      quizzes: [
        {
          question: "What does PHP stand for?",
          options: [
            "Hypertext Preprocessor",
            "Personal Home Page",
            "Private Home Page",
          ],
          answer: "Hypertext Preprocessor",
        },
        {
          question: "Which symbol is used to declare a variable in PHP?",
          options: ["$", "#", "&"],
          answer: "$",
        },
        {
          question: "What is the correct way to end a PHP statement?",
          options: [";", "end;", "done;"],
          answer: ";",
        },
        {
          question: "Which function is used to output text in PHP?",
          options: ["echo", "print", "Both"],
          answer: "Both",
        },
        {
          question: "What is the output of 'echo 5 + 5;' in PHP?",
          options: ["10", "55", "Error"],
          answer: "10",
        },
        {
          question: "How do you declare an array in PHP?",
          options: ["$array = array()", "$array = []", "Both"],
          answer: "Both",
        },
        {
          question:
            "Which function is used to get the length of a string in PHP?",
          options: ["strlen()", "count()", "length()"],
          answer: "strlen()",
        },
        {
          question: "What is the correct way to create a comment in PHP?",
          options: ["// This is a comment", "# This is a comment", "Both"],
          answer: "Both",
        },
        {
          question: "How do you create a function in PHP?",
          options: [
            "function functionName()",
            "create function functionName()",
            "def functionName()",
          ],
          answer: "function functionName()",
        },
        {
          question: "What is the purpose of the 'return' statement in PHP?",
          options: ["To end a function", "To return a value", "Both"],
          answer: "Both",
        },
      ],
    },
    {
      id: 10,
      title: "R Programming for Data Analysis",
      description: "Learn R programming for data analysis and visualization.",
      quizzes: [
        {
          question: "What is the file extension for R scripts?",
          options: [".R", ".r", ".Rscript"],
          answer: ".R",
        },
        {
          question: "Which function is used to read data in R?",
          options: ["read.csv()", "load.data()", "import()"],
          answer: "read.csv()",
        },
        {
          question: "How do you create a vector in R?",
          options: ["c(1, 2, 3)", "vector(1, 2, 3)", "vec(1, 2, 3)"],
          answer: "c(1, 2, 3)",
        },
        {
          question:
            "Which package is commonly used for data visualization in R?",
          options: ["ggplot2", "dplyr", "tidyverse"],
          answer: "ggplot2",
        },
        {
          question: "How do you install a package in R?",
          options: [
            "install.package('packageName')",
            "install.packages('packageName')",
            "require('packageName')",
          ],
          answer: "install.packages('packageName')",
        },
        {
          question: "What is the default method for summing a vector in R?",
          options: ["sum()", "total()", "aggregate()"],
          answer: "sum()",
        },
        {
          question: "What is a data frame in R?",
          options: ["A list of vectors", "A table of data", "A type of vector"],
          answer: "A table of data",
        },
        {
          question: "How do you create a plot in R?",
          options: ["plot(data)", "draw(data)", "chart(data)"],
          answer: "plot(data)",
        },
        {
          question: "What does the function str() do in R?",
          options: [
            "Structures data",
            "Shows structure of an object",
            "Transforms data",
          ],
          answer: "Shows structure of an object",
        },
        {
          question: "Which operator is used for assignment in R?",
          options: ["=", ":=", "<-"],
          answer: "<-",
        },
      ],
    },
    {
      id: 11,
      title: "Rust Programming Basics",
      description: "Learn the fundamentals of Rust programming.",
      quizzes: [
        {
          question: "What is the file extension for Rust files?",
          options: [".rs", ".rust", ".r"],
          answer: ".rs",
        },
        {
          question: "Which keyword is used to define a variable in Rust?",
          options: ["let", "var", "const"],
          answer: "let",
        },
        {
          question: "What does 'mut' mean in Rust?",
          options: ["Immutable", "Mutable", "Reference"],
          answer: "Mutable",
        },
        {
          question: "How do you create a function in Rust?",
          options: [
            "fn function_name()",
            "create function_name()",
            "function function_name()",
          ],
          answer: "fn function_name()",
        },
        {
          question: "What is the default visibility of a struct in Rust?",
          options: ["private", "public", "protected"],
          answer: "private",
        },
        {
          question: "Which keyword is used to create a constant in Rust?",
          options: ["let", "const", "variable"],
          answer: "const",
        },
        {
          question: "How do you create a vector in Rust?",
          options: [
            "let vec = Vec::new()",
            "vec = [1, 2, 3]",
            "vec = new Vec()",
          ],
          answer: "let vec = Vec::new()",
        },
        {
          question: "What does the 'match' statement do in Rust?",
          options: ["Matches patterns", "Compares values", "Both"],
          answer: "Both",
        },
        {
          question: "How do you handle errors in Rust?",
          options: ["try-catch", "Result type", "error()"],
          answer: "Result type",
        },
        {
          question: "Which trait is used for printing in Rust?",
          options: ["Display", "Print", "Output"],
          answer: "Display",
        },
      ],
    },
    {
      id: 12,
      title: "TypeScript Basics",
      description: "Learn TypeScript, the typed superset of JavaScript.",
      quizzes: [
        {
          question: "What is the file extension for TypeScript files?",
          options: [".ts", ".typescript", ".js"],
          answer: ".ts",
        },
        {
          question: "How do you define a variable in TypeScript?",
          options: [
            "let variableName: type",
            "var variableName: type",
            "const variableName: type",
          ],
          answer: "let variableName: type",
        },
        {
          question: "Which keyword is used to create a type in TypeScript?",
          options: ["type", "interface", "both"],
          answer: "type",
        },
        {
          question:
            "What is the output of 'console.log(typeof variable)' if variable is a number?",
          options: ["number", "string", "undefined"],
          answer: "number",
        },
        {
          question: "How do you create an array in TypeScript?",
          options: ["let arr: number[]", "let arr: Array<number>", "Both"],
          answer: "Both",
        },
        {
          question: "What does 'strictNullChecks' do in TypeScript?",
          options: [
            "Allows null values",
            "Disallows null values",
            "Changes type checking",
          ],
          answer: "Disallows null values",
        },
        {
          question: "What is the purpose of 'enum' in TypeScript?",
          options: [
            "To define a set of named constants",
            "To create a class",
            "To create a type",
          ],
          answer: "To define a set of named constants",
        },
        {
          question: "How do you define a function in TypeScript?",
          options: [
            "function functionName(): returnType",
            "def functionName(): returnType",
            "func functionName(): returnType",
          ],
          answer: "function functionName(): returnType",
        },
        {
          question: "What is the use of 'as' keyword in TypeScript?",
          options: ["Type assertion", "Type casting", "Both"],
          answer: "Both",
        },
        {
          question: "How do you create a tuple in TypeScript?",
          options: [
            "let tuple: [number, string]",
            "let tuple = (1, 'text')",
            "let tuple: (number, string)[]",
          ],
          answer: "let tuple: [number, string]",
        },
      ],
    },
    {
      id: 13,
      title: "Scala Basics",
      description: "Learn the basics of Scala programming.",
      quizzes: [
        {
          question: "What is the file extension for Scala files?",
          options: [".scala", ".sc", ".scalaScript"],
          answer: ".scala",
        },
        {
          question: "How do you define a variable in Scala?",
          options: ["var variableName: Type", "val variableName: Type", "Both"],
          answer: "Both",
        },
        {
          question: "What is the main method signature in Scala?",
          options: [
            "def main(args: Array[String]): Unit",
            "main(args: Array[String]): Unit",
            "def main(): Unit",
          ],
          answer: "def main(args: Array[String]): Unit",
        },
        {
          question: "Which symbol is used for comments in Scala?",
          options: ["//", "#", "/*"],
          answer: "//",
        },
        {
          question: "How do you create a list in Scala?",
          options: ["List(1, 2, 3)", "List{1, 2, 3}", "array(1, 2, 3)"],
          answer: "List(1, 2, 3)",
        },
        {
          question: "What does the 'case class' keyword do in Scala?",
          options: [
            "Creates a class with immutable properties",
            "Defines a function",
            "Creates a data type",
          ],
          answer: "Creates a class with immutable properties",
        },
        {
          question: "What is the purpose of 'trait' in Scala?",
          options: ["To define an interface", "To create a class", "Both"],
          answer: "To define an interface",
        },
        {
          question: "How do you handle exceptions in Scala?",
          options: ["try-catch", "throw-catch", "exception handling"],
          answer: "try-catch",
        },
        {
          question: "What is the output of 'println(1 + 2)' in Scala?",
          options: ["3", "12", "Error"],
          answer: "3",
        },
        {
          question: "How do you define a function in Scala?",
          options: [
            "def functionName(): Unit",
            "function functionName(): Unit",
            "create functionName()",
          ],
          answer: "def functionName(): Unit",
        },
      ],
    },
    {
      id: 14,
      title: "Dart for Flutter Development",
      description: "Learn Dart programming for Flutter app development.",
      quizzes: [
        {
          question: "What is the file extension for Dart files?",
          options: [".dart", ".dartfile", ".d"],
          answer: ".dart",
        },
        {
          question: "How do you define a variable in Dart?",
          options: [
            "var variableName",
            "final variableName",
            "const variableName",
          ],
          answer: "var variableName",
        },
        {
          question: "Which keyword is used to create a constant in Dart?",
          options: ["const", "final", "both"],
          answer: "const",
        },
        {
          question: "What is the main function signature in Dart?",
          options: ["void main() {}", "main() {}", "void main()"],
          answer: "void main() {}",
        },
        {
          question: "How do you create a list in Dart?",
          options: ["List<int> myList = []", "var myList = List()", "both"],
          answer: "both",
        },
        {
          question: "What does the 'async' keyword indicate in Dart?",
          options: [
            "Asynchronous function",
            "Synchronous function",
            "Function type",
          ],
          answer: "Asynchronous function",
        },
        {
          question: "How do you create a class in Dart?",
          options: [
            "class ClassName {}",
            "create class ClassName {}",
            "define class ClassName {}",
          ],
          answer: "class ClassName {}",
        },
        {
          question: "What is the purpose of the 'Future' type in Dart?",
          options: [
            "Represents a value that will be available later",
            "Creates a new thread",
            "Both",
          ],
          answer: "Represents a value that will be available later",
        },
        {
          question: "How do you define a function in Dart?",
          options: [
            "void functionName() {}",
            "def functionName() {}",
            "function functionName()",
          ],
          answer: "void functionName() {}",
        },
        {
          question:
            "Which library is commonly used for Flutter development in Dart?",
          options: ["flutter", "dart:core", "material"],
          answer: "flutter",
        },
      ],
    },
  ],
  enrolledCourses: [] as number[],
  progress: { completedModules: 0, totalModules: 5 } as Progress,
};

// Actions
const ENROLL_COURSE = "ENROLL_COURSE";
const COMPLETE_MODULE = "COMPLETE_MODULE";

const enrollCourse = (courseId: number) => ({
  type: ENROLL_COURSE,
  payload: courseId,
});
const completeModule = () => ({ type: COMPLETE_MODULE });

// Reducer
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ENROLL_COURSE:
      return {
        ...state,
        enrolledCourses: [...state.enrolledCourses, action.payload],
      };
    case COMPLETE_MODULE:
      return {
        ...state,
        progress: {
          ...state.progress,
          completedModules: state.progress.completedModules + 1,
        },
      };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#1976d2" },
    background: { default: "#121212", paper: "#1d1d1d" },
  },
});

const CourseCatalog: React.FC<{ onSelectCourse: (course: Course) => void }> = ({
  onSelectCourse,
}) => {
  const courses = useSelector((state: typeof initialState) => state.courses);
  const enrolledCourses = useSelector(
    (state: typeof initialState) => state.enrolledCourses
  );
  const dispatch = useDispatch();

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        Available Courses
      </Typography>
      {courses.map((course) => (
        <Card
          key={course.id}
          sx={{ mb: 2, p: 2, display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {course.title}
            </Typography>
            <Typography>{course.description}</Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                onSelectCourse(course);
                dispatch(enrollCourse(course.id));
              }}
              disabled={enrolledCourses.includes(course.id)}
              sx={{ alignSelf: "center" }}
            >
              {enrolledCourses.includes(course.id) ? "Enrolled" : "Enroll"}
            </Button>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

const QuizComponent: React.FC<{ questions: QuizQuestion[] }> = ({
  questions,
}) => {
  const [userAnswers, setUserAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (index: number, answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = answer;
    setUserAnswers(newAnswers);
  };

  const submitQuiz = () => {
    setIsSubmitted(true);
  };

  const score = questions.reduce(
    (acc, q, i) => (q.answer === userAnswers[i] ? acc + 1 : acc),
    0
  );

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        Quiz
      </Typography>
      {questions.map((q, i) => (
        <Box key={i} sx={{ mb: 2 }}>
          <Typography sx={{ mb: 1 }}>{q.question}</Typography>
          {q.options.map((option) => (
            <Box key={option} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={userAnswers[i] === option}
                onChange={() => handleAnswerChange(i, option)}
              />
              <Typography>{option}</Typography>
            </Box>
          ))}
        </Box>
      ))}
      {!isSubmitted ? (
        <Button variant="contained" color="secondary" onClick={submitQuiz}>
          Submit Quiz
        </Button>
      ) : (
        <Typography sx={{ mt: 2 }}>
          Quiz Score: {score}/{questions.length}
        </Typography>
      )}
    </Box>
  );
};

const Certificate: React.FC<{ userName: string; courseName: string }> = ({
  userName,
  courseName,
}) => (
  <Document>
    <Page size="A4" style={{ padding: "30px", textAlign: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Certificate of Completion
      </Text>
      <Text>This certifies that</Text>
      <Text style={{ fontSize: 20, margin: 10 }}>{userName}</Text>
      <Text>has successfully completed the course</Text>
      <Text style={{ fontSize: 20, margin: 10 }}>"{courseName}"</Text>
    </Page>
  </Document>
);

const ProgressTracker: React.FC = () => {
  const progress = useSelector((state: typeof initialState) => state.progress);
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Progress Tracker
      </Typography>
      <Typography sx={{ mt: 1 }}>
        {progress.completedModules}/{progress.totalModules} Modules Completed
      </Typography>
    </Box>
  );
};

const ELearningPlatform: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const dispatch = useDispatch();

  const handleDownload = async () => {
    if (!selectedCourse) return;

    const blob = await pdf(
      <Certificate userName="Anchal Singh" courseName={selectedCourse.title} />
    ).toBlob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Certificate.pdf";
    link.click();
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <CssBaseline />
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        E-Learning Platform
      </Typography>
      <CourseCatalog onSelectCourse={setSelectedCourse} />
      {selectedCourse && (
        <>
          <QuizComponent questions={selectedCourse.quizzes} />
          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={() => dispatch(completeModule())}
          >
            Complete Module
          </Button>
          <ProgressTracker />
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
            >
              Download Certificate
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

// App with Redux Provider
const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ELearningPlatform />
    </ThemeProvider>
  </Provider>
);

export default App;
