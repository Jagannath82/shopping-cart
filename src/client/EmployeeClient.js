import axios from "axios"

const EMPLOYEE_QUERY = `
  {
    getAllEmployees{
      name
      salary
    }
  }
`;
const api = axios.create({
    baseURL: "http://localhost:8082",
});

export const fetchAllEmployees = async () => {
    try{
        const employees = await axios({
            url: "http://localhost:8082/graphql",
            method: "POST",
            data: {
              query: EMPLOYEE_QUERY
            }
          });
        console.log(employees);
        return employees;
    }catch(err){
        console.log(err);
    }
}