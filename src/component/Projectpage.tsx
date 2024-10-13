import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  pdf,
} from "@react-pdf/renderer";
import { Button, Drawer } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

// Register a professional font for the certificate
Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff",
    },
  ],
});

// Styles for the certificate
const certificateStyles = StyleSheet.create({
  page: {
    padding: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1pt solid #000",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textDecoration: "underline",
  },
  bodyText: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  recipientName: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  courseName: {
    fontSize: 20,
    fontStyle: "italic",
    marginVertical: 10,
  },
  footer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  signature: {
    fontSize: 14,
    textAlign: "center",
    borderTop: "1pt solid #000",
    width: "40%",
    paddingTop: 5,
  },
});

// Certificate component
const EnhancedCertificate: React.FC<{
  userName: string;
  courseName: string;
}> = ({ userName, courseName }) => (
  <Document>
    <Page size="A4" style={certificateStyles.page}>
      <Text style={certificateStyles.title}>Certificate of Completion</Text>
      <Text style={certificateStyles.bodyText}>This certifies that</Text>
      <Text style={certificateStyles.recipientName}>{userName}</Text>
      <Text style={certificateStyles.bodyText}>
        has successfully completed the course
      </Text>
      <Text style={certificateStyles.courseName}>"{courseName}"</Text>
      <Text style={certificateStyles.bodyText}>awarded on this day</Text>
      <View style={certificateStyles.footer}>
        <Text style={certificateStyles.signature}>Instructor's Signature</Text>
        <Text style={certificateStyles.signature}>Date</Text>
      </View>
    </Page>
  </Document>
);

const ELearningPlatform = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<string[]>([]); // Track user answers
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); // Track if the quiz is submitted

  // List of courses and corresponding quizzes
  const courses = [
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
          options: ["65", "30", "102030"],
          answer: "102030",
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

    {
      id: 15,
      title: "Swift for iOS Development",
      description: "Learn Swift programming for iOS development.",
      quizzes: [
        {
          question: "What is the file extension for Swift files?",
          options: [".swift", ".sw", ".ios"],
          answer: ".swift",
        },
        {
          question: "How do you declare a variable in Swift?",
          options: ["var variableName", "let variableName", "Both"],
          answer: "Both",
        },
        {
          question: "What does the keyword 'let' signify in Swift?",
          options: [
            "Immutable variable",
            "Mutable variable",
            "Constant function",
          ],
          answer: "Immutable variable",
        },
        {
          question: "How do you define a function in Swift?",
          options: [
            "func functionName() {}",
            "def functionName() {}",
            "function functionName()",
          ],
          answer: "func functionName() {}",
        },
        {
          question: "What is the purpose of Optionals in Swift?",
          options: [
            "Handle null values safely",
            "Optimize code",
            "Increase performance",
          ],
          answer: "Handle null values safely",
        },
        {
          question: "Which keyword is used to create a class in Swift?",
          options: ["class", "struct", "object"],
          answer: "class",
        },
        {
          question: "How do you unwrap an optional in Swift?",
          options: [
            "Using '!' operator",
            "Using '?' operator",
            "Using '*' operator",
          ],
          answer: "Using '!' operator",
        },
        {
          question: "What is the purpose of closures in Swift?",
          options: [
            "Anonymous functions",
            "Declare constants",
            "Define classes",
          ],
          answer: "Anonymous functions",
        },
        {
          question:
            "Which framework is commonly used for UI development in iOS?",
          options: ["UIKit", "SwiftUI", "Both"],
          answer: "Both",
        },
        {
          question: "How do you create an array in Swift?",
          options: ["let array = [1, 2, 3]", "array(1, 2, 3)", "List(1, 2, 3)"],
          answer: "let array = [1, 2, 3]",
        },
      ],
    },
    {
      id: 16,
      title: "Go Programming for Backend Development",
      description: "Learn Go programming for efficient backend development.",
      quizzes: [
        {
          question: "What is the file extension for Go files?",
          options: [".go", ".golang", ".g"],
          answer: ".go",
        },
        {
          question: "Which keyword is used to declare a variable in Go?",
          options: ["var", "let", "const"],
          answer: "var",
        },
        {
          question: "How do you define a function in Go?",
          options: [
            "func functionName() {}",
            "function functionName() {}",
            "def functionName()",
          ],
          answer: "func functionName() {}",
        },
        {
          question: "Which package is used by default in every Go program?",
          options: ["main", "fmt", "utils"],
          answer: "main",
        },
        {
          question: "What does the keyword 'defer' do in Go?",
          options: [
            "Delays execution until the function returns",
            "Stops execution",
            "Creates a new variable",
          ],
          answer: "Delays execution until the function returns",
        },
        {
          question: "How do you import packages in Go?",
          options: ["import 'fmt'", "import fmt", 'import "fmt"'],
          answer: 'import "fmt"',
        },
        {
          question: "What does the ':=’ symbol do in Go?",
          options: ["Short variable declaration", "Assignment", "Comparison"],
          answer: "Short variable declaration",
        },
        {
          question:
            "Which data structure is commonly used for key-value storage in Go?",
          options: ["Map", "Array", "Slice"],
          answer: "Map",
        },
        {
          question: "How do you handle errors in Go?",
          options: ["Error handling", "try-catch", "By returning error values"],
          answer: "By returning error values",
        },
        {
          question: "Which Go package is used for concurrency?",
          options: ["sync", "concurrent", "goroutine"],
          answer: "sync",
        },
      ],
    },
    {
      id: 17,
      title: "Kotlin for Android Development",
      description:
        "Learn Kotlin programming for Android application development.",
      quizzes: [
        {
          question: "What is the file extension for Kotlin files?",
          options: [".kt", ".kotlin", ".k"],
          answer: ".kt",
        },
        {
          question: "How do you define a variable in Kotlin?",
          options: [
            "var variableName",
            "let variableName",
            "define variableName",
          ],
          answer: "var variableName",
        },
        {
          question: "What does 'val' signify in Kotlin?",
          options: [
            "Immutable variable",
            "Mutable variable",
            "Constant function",
          ],
          answer: "Immutable variable",
        },
        {
          question: "How do you create a function in Kotlin?",
          options: [
            "fun functionName() {}",
            "def functionName() {}",
            "function functionName()",
          ],
          answer: "fun functionName() {}",
        },
        {
          question: "What is the purpose of null safety in Kotlin?",
          options: [
            "Avoid null pointer exceptions",
            "Increase performance",
            "Optimize code",
          ],
          answer: "Avoid null pointer exceptions",
        },
        {
          question: "Which keyword is used to create a class in Kotlin?",
          options: ["class", "object", "struct"],
          answer: "class",
        },
        {
          question: "How do you declare a list in Kotlin?",
          options: ["listOf(1, 2, 3)", "array(1, 2, 3)", "List(1, 2, 3)"],
          answer: "listOf(1, 2, 3)",
        },
        {
          question: "What is a data class in Kotlin?",
          options: [
            "Class for storing data",
            "Class for UI",
            "Class for network operations",
          ],
          answer: "Class for storing data",
        },
        {
          question: "Which Kotlin extension is used for Android UI?",
          options: ["KTX", "Anko", "UIX"],
          answer: "KTX",
        },
        {
          question: "How do you handle asynchronous programming in Kotlin?",
          options: ["Coroutines", "Threads", "async-await"],
          answer: "Coroutines",
        },
      ],
    },
    {
      id: 18,
      title: "MATLAB for Scientific Computing",
      description: "Learn MATLAB for scientific and engineering computations.",
      quizzes: [
        {
          question: "What is the file extension for MATLAB files?",
          options: [".m", ".matlab", ".mat"],
          answer: ".m",
        },
        {
          question: "How do you create a script in MATLAB?",
          options: [
            "Create .m file",
            "Create .script file",
            "Create .mat file",
          ],
          answer: "Create .m file",
        },
        {
          question: "Which function is used to display output in MATLAB?",
          options: ["disp()", "print()", "echo()"],
          answer: "disp()",
        },
        {
          question: "How do you plot a graph in MATLAB?",
          options: ["plot()", "draw()", "graph()"],
          answer: "plot()",
        },
        {
          question: "Which command is used to clear the workspace in MATLAB?",
          options: ["clear", "clc", "clean"],
          answer: "clear",
        },
        {
          question: "What is a matrix in MATLAB?",
          options: [
            "2D array of numbers",
            "1D list of numbers",
            "3D array of numbers",
          ],
          answer: "2D array of numbers",
        },
        {
          question: "How do you load data from a file in MATLAB?",
          options: ["load('file')", "open('file')", "import('file')"],
          answer: "load('file')",
        },
        {
          question:
            "Which function is used for matrix multiplication in MATLAB?",
          options: ["mtimes()", "multiply()", "matmul()"],
          answer: "mtimes()",
        },
        {
          question: "How do you create a function in MATLAB?",
          options: [
            "function funcName()",
            "def funcName()",
            "create funcName()",
          ],
          answer: "function funcName()",
        },
        {
          question: "Which MATLAB function is used for Fourier Transform?",
          options: ["fft()", "ft()", "fourier()"],
          answer: "fft()",
        },
      ],
    },
    {
      id: 19,
      title: "PHP for Web Development",
      description: "Learn PHP for server-side scripting and web development.",
      quizzes: [
        {
          question: "What is the file extension for PHP files?",
          options: [".php", ".ph", ".html"],
          answer: ".php",
        },
        {
          question: "How do you start a PHP script?",
          options: ["<?php", "<script>", "<php>"],
          answer: "<?php",
        },
        {
          question: "Which symbol is used for variables in PHP?",
          options: ["$", "#", "&"],
          answer: "$",
        },
        {
          question: "How do you create a function in PHP?",
          options: [
            "function functionName() {}",
            "def functionName() {}",
            "fn functionName()",
          ],
          answer: "function functionName() {}",
        },
        {
          question: "What does 'echo' do in PHP?",
          options: ["Outputs text", "Creates a variable", "Defines a class"],
          answer: "Outputs text",
        },
        {
          question: "How do you connect to a MySQL database in PHP?",
          options: ["mysqli_connect()", "mysql_connect()", "pdo_connect()"],
          answer: "mysqli_connect()",
        },
        {
          question: "Which superglobal is used to get form data in PHP?",
          options: ["$_POST", "$POST", "$form"],
          answer: "$_POST",
        },
        {
          question: "How do you include another file in PHP?",
          options: [
            "include('file.php')",
            "import('file.php')",
            "require('file.php')",
          ],
          answer: "include('file.php')",
        },
        {
          question: "What is the purpose of 'session_start()' in PHP?",
          options: ["Starts a session", "Ends a session", "Logs in a user"],
          answer: "Starts a session",
        },
        {
          question: "How do you check if a variable is set in PHP?",
          options: ["isset()", "defined()", "check()"],
          answer: "isset()",
        },
      ],
    },

    {
      id: 20,
      title: "Ruby for Web Development",
      description: "Learn Ruby programming for efficient web development.",
      quizzes: [
        {
          question: "What is the file extension for Ruby files?",
          options: [".rb", ".ruby", ".ru"],
          answer: ".rb",
        },
        {
          question: "How do you define a method in Ruby?",
          options: [
            "def methodName",
            "function methodName",
            "create methodName",
          ],
          answer: "def methodName",
        },
        {
          question: "Which symbol is used to indicate a block of code in Ruby?",
          options: ["do...end", "{...}", "[...]"],
          answer: "do...end",
        },
        {
          question: "What is the primary web development framework for Ruby?",
          options: ["Rails", "Django", "Laravel"],
          answer: "Rails",
        },
        {
          question: "How do you create a new array in Ruby?",
          options: ["[1, 2, 3]", "{1, 2, 3}", "Array(1, 2, 3)"],
          answer: "[1, 2, 3]",
        },
        {
          question: "What does 'nil' represent in Ruby?",
          options: ["A null value", "A boolean", "An integer"],
          answer: "A null value",
        },
        {
          question: "Which symbol is used for variables in Ruby?",
          options: ["@", "$", "#"],
          answer: "@",
        },
        {
          question: "What is the main package manager for Ruby?",
          options: ["RubyGems", "npm", "pip"],
          answer: "RubyGems",
        },
        {
          question: "How do you concatenate strings in Ruby?",
          options: ["Using '+'", "Using '||'", "Using '&'"],
          answer: "Using '+'",
        },
        {
          question:
            "Which method is used to convert a string to an integer in Ruby?",
          options: ["to_i", "convertInt", "to_integer"],
          answer: "to_i",
        },
      ],
    },
    {
      id: 21,
      title: "Rust for Systems Programming",
      description:
        "Learn Rust for fast, safe, and concurrent systems programming.",
      quizzes: [
        {
          question: "What is the file extension for Rust files?",
          options: [".rs", ".rust", ".rt"],
          answer: ".rs",
        },
        {
          question: "How do you declare a variable in Rust?",
          options: [
            "let variableName",
            "var variableName",
            "define variableName",
          ],
          answer: "let variableName",
        },
        {
          question:
            "Which Rust feature ensures memory safety without garbage collection?",
          options: ["Ownership", "Scope", "Manual Memory Management"],
          answer: "Ownership",
        },
        {
          question: "How do you define a function in Rust?",
          options: [
            "fn functionName() {}",
            "function functionName() {}",
            "def functionName()",
          ],
          answer: "fn functionName() {}",
        },
        {
          question: "What keyword is used to create a constant in Rust?",
          options: ["const", "var", "immutable"],
          answer: "const",
        },
        {
          question:
            "Which Rust type is used for a collection of key-value pairs?",
          options: ["HashMap", "Vector", "Array"],
          answer: "HashMap",
        },
        {
          question: "What does the '?' symbol signify in Rust?",
          options: ["Error propagation", "Error handling", "Assignment"],
          answer: "Error propagation",
        },
        {
          question: "How do you define a struct in Rust?",
          options: [
            "struct StructName {}",
            "define StructName {}",
            "structure StructName {}",
          ],
          answer: "struct StructName {}",
        },
        {
          question: "What is Cargo in Rust?",
          options: ["Package manager and build system", "Compiler", "Debugger"],
          answer: "Package manager and build system",
        },
        {
          question: "Which keyword is used to implement traits in Rust?",
          options: ["impl", "implement", "trait"],
          answer: "impl",
        },
      ],
    },
    {
      id: 22,
      title: "R for Statistical Computing",
      description:
        "Learn R programming for statistical analysis and data science.",
      quizzes: [
        {
          question: "What is the file extension for R scripts?",
          options: [".r", ".R", ".rs"],
          answer: ".R",
        },
        {
          question: "How do you assign a value to a variable in R?",
          options: ["<-", "=", ":"],
          answer: "<-",
        },
        {
          question: "Which function is used to display data in R?",
          options: ["print()", "show()", "display()"],
          answer: "print()",
        },
        {
          question: "Which package is used for data manipulation in R?",
          options: ["dplyr", "ggplot2", "tidyverse"],
          answer: "dplyr",
        },
        {
          question: "How do you create a vector in R?",
          options: ["c(1, 2, 3)", "[1, 2, 3]", "list(1, 2, 3)"],
          answer: "c(1, 2, 3)",
        },
        {
          question: "Which function is used to plot graphs in R?",
          options: ["plot()", "graph()", "draw()"],
          answer: "plot()",
        },
        {
          question: "How do you load a library in R?",
          options: [
            "library(libraryName)",
            "import(libraryName)",
            "load(libraryName)",
          ],
          answer: "library(libraryName)",
        },
        {
          question: "What is the purpose of 'NA' in R?",
          options: [
            "Represents missing values",
            "Indicates end of file",
            "Null value",
          ],
          answer: "Represents missing values",
        },
        {
          question: "Which function is used to combine data frames in R?",
          options: ["merge()", "combine()", "join()"],
          answer: "merge()",
        },
        {
          question: "How do you create a data frame in R?",
          options: ["data.frame()", "df()", "dataFrame()"],
          answer: "data.frame()",
        },
      ],
    },
    {
      id: 23,
      title: "Julia for High-Performance Programming",
      description:
        "Learn Julia programming for high-performance scientific computing.",
      quizzes: [
        {
          question: "What is the file extension for Julia files?",
          options: [".jl", ".julia", ".ju"],
          answer: ".jl",
        },
        {
          question: "How do you define a function in Julia?",
          options: [
            "function functionName end",
            "def functionName end",
            "fn functionName",
          ],
          answer: "function functionName end",
        },
        {
          question: "Which operator is used for exponentiation in Julia?",
          options: ["^", "**", "pow()"],
          answer: "^",
        },
        {
          question: "Which keyword is used to define a constant in Julia?",
          options: ["const", "let", "var"],
          answer: "const",
        },
        {
          question: "How do you install a package in Julia?",
          options: [
            "using Pkg; Pkg.add()",
            "import package",
            "install(package)",
          ],
          answer: "using Pkg; Pkg.add()",
        },
        {
          question: "Which function is used to print output in Julia?",
          options: ["println()", "echo()", "display()"],
          answer: "println()",
        },
        {
          question: "How do you create an array in Julia?",
          options: ["[1, 2, 3]", "Array(1, 2, 3)", "array(1, 2, 3)"],
          answer: "[1, 2, 3]",
        },
        {
          question: "What does 'mutable struct' mean in Julia?",
          options: [
            "Defines a modifiable structure",
            "Defines an immutable structure",
            "Defines an interface",
          ],
          answer: "Defines a modifiable structure",
        },
        {
          question: "Which Julia package is popular for data manipulation?",
          options: ["DataFrames.jl", "Pandas.jl", "Tidy.jl"],
          answer: "DataFrames.jl",
        },
        {
          question: "What is the broadcasting operator in Julia?",
          options: [".", ":", "@"],
          answer: ".",
        },
      ],
    },
    {
      id: 24,
      title: "Perl for Text Processing",
      description:
        "Learn Perl for powerful text processing and data manipulation.",
      quizzes: [
        {
          question: "What is the file extension for Perl files?",
          options: [".pl", ".perl", ".pe"],
          answer: ".pl",
        },
        {
          question: "How do you print output in Perl?",
          options: ["print()", "echo()", "disp()"],
          answer: "print()",
        },
        {
          question:
            "Which symbol is used to declare a scalar variable in Perl?",
          options: ["$", "@", "%"],
          answer: "$",
        },
        {
          question: "What is the purpose of 'chomp' in Perl?",
          options: [
            "Removes newline characters",
            "Adds a newline character",
            "Converts to uppercase",
          ],
          answer: "Removes newline characters",
        },
        {
          question: "How do you create an array in Perl?",
          options: [
            "@array = (1, 2, 3);",
            "array = [1, 2, 3];",
            "array(1, 2, 3);",
          ],
          answer: "@array = (1, 2, 3);",
        },
        {
          question: "Which symbol is used to declare an array in Perl?",
          options: ["@", "$", "%"],
          answer: "@",
        },
        {
          question: "How do you add an element to the end of an array in Perl?",
          options: [
            "push @array, element;",
            "add @array, element;",
            "append @array, element;",
          ],
          answer: "push @array, element;",
        },
        {
          question: "What does 'use strict' enforce in Perl?",
          options: [
            "Helps catch coding errors",
            "Adds debugging",
            "Improves performance",
          ],
          answer: "Helps catch coding errors",
        },
        {
          question: "Which operator is used for string concatenation in Perl?",
          options: [".", "+", "&"],
          answer: ".",
        },
        {
          question: "How do you define a subroutine in Perl?",
          options: [
            "sub functionName {}",
            "def functionName {}",
            "fn functionName {}",
          ],
          answer: "sub functionName {}",
        },
      ],
    },
  ];

  const handleCourseSelect = (course: string) => {
    setSelectedCourse(course);
    setUserAnswers([]); // Reset user answers when a new course is selected
    setIsSubmitted(false); // Reset submission state
  };

  const handleAnswerChange = (quizIndex: number, option: string) => {
    // Set the user's answer for the selected quiz
    const newAnswers = [...userAnswers];
    newAnswers[quizIndex] = option;
    setUserAnswers(newAnswers);
  };

  const handleQuizSubmit = () => {
    setIsSubmitted(true); // Mark quiz as submitted
  };

  // Download the certificate as a PDF
  const handleDownloadCertificate = async () => {
    if (!selectedCourse) return;

    const blob = await pdf(
      <EnhancedCertificate
        userName="Anchal Singh"
        courseName={selectedCourse}
      />
    ).toBlob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${selectedCourse}_Certificate.pdf`;
    link.click();
  };

  const currentCourse = courses.find(
    (course) => course.title === selectedCourse
  );
  // Check if at least one option is checked
  const isAnyOptionChecked = userAnswers.some((answer) => answer !== undefined);
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Drawer for Courses */}
      <Drawer variant="permanent" anchor="left">
        <div style={{ width: 240, padding: 20 }}>
          <h4>Courses</h4>
          {courses.map((course) => (
            <Button
              key={course.id}
              variant="outlined"
              fullWidth
              style={{ marginBottom: 10 }}
              onClick={() => handleCourseSelect(course.title)}
            >
              {course.title}
            </Button>
          ))}
        </div>
      </Drawer>

      {/* Right Tabs for Quizzes */}
      <div style={{ flex: 1, padding: 20 }}>
        {selectedCourse ? (
          <>
            <h3 style={{ textAlign: "center" }}>Course: {selectedCourse}</h3>
            <h4 style={{ textAlign: "center" }}>Quiz Content:</h4>
            {currentCourse?.quizzes.map((quiz, index) => (
              <div
                key={index}
                style={{ textAlign: "center", marginBottom: 20 }}
              >
                <h5>{quiz.question}</h5>
                {quiz.options.map((option, idx) => {
                  const userAnswer = userAnswers[index];
                  const isAnswered = isSubmitted && userAnswer === option;
                  return (
                    <div key={idx} style={{ marginBottom: 10 }}>
                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          type="checkbox"
                          disabled={isSubmitted}
                          checked={userAnswer === option}
                          onChange={() => handleAnswerChange(index, option)}
                        />
                        <span
                          style={{
                            color: isAnswered
                              ? userAnswer === quiz.answer
                                ? "green"
                                : "red"
                              : "black",
                            marginLeft: 8,
                          }}
                        >
                          {option}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
            ))}
            {!isSubmitted && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleQuizSubmit}
                style={{ marginTop: 20 }}
                disabled={!isAnyOptionChecked} // Disable if no options are checked
              >
                Submit Quiz
              </Button>
            )}
            {isSubmitted && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleDownloadCertificate();
                  alert("Certificate Downloaded!");
                }} // Placeholder action
                style={{ marginTop: 20 }}
              >
                Download Certificate
              </Button>
            )}
          </>
        ) : (
          <p style={{ textAlign: "center" }}>
            Select a course to start the quizzes.
          </p>
        )}
      </div>
    </div>
  );
};

export default ELearningPlatform;
