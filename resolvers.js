const Employee = require('./models/Employee');

exports.resolvers =
{
    Query: {
        getEmployees: async (parent, args) =>
        {
            return Employee.find({})
        }
    },

    Mutation: {
        addEmployee: async (parent,args) =>
        {
            console.log(args)

            let newEmp = new Employee(
                {
                    firstname: args.firstname,
                    lastname: args.lastname,
                    email: args.email,
                    gender: args.gender,
                    city: args.city,
                    designation: args.designation,
                    salary: args.salary
                })

            return newEmp.save()

        }
    }
}