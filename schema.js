const { gql } = require('apollo-server-express');

exports.typeDefs = gql `

    type Employee
    {
        id:ID!
        firstname: String!
        lastname: String!
        email: String!
        gender:String!
        city:String!
        designation: String!
        salary: Float!
    }

    type Query
    {
        getEmployees: [Employee]
    }

    type Mutation
    {
        addEmployee(
        firstname: String!
        lastname: String!
        email: String!
        gender:String!
        city:String!
        designation: String!
        salary: Float!) : Employee
        
    }


`