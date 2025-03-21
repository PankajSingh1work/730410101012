export default function FetchUsers() {
    const [users, setUsers] = useState([]);
    const [post, setPosts] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
    const [users , setUsers] = useState([]);
    const [post, posts]= useState([]);

  useEffect(()=>{

    const fetchUsers = async()=>{

      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNTM3MTYxLCJpYXQiOjE3NDI1MzY4NjEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjA4MDY2MWIzLTU3NmMtNGM1NS1hNTRlLTVmYmEzOWExMmIzNCIsInN1YiI6InJhd2F0cGFua3U5OTFAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiYWZmb3JkbWVkIiwiY2xpZW50SUQiOiIwODA2NjFiMy01NzZjLTRjNTUtYTU0ZS01ZmJhMzlhMTJiMzQiLCJjbGllbnRTZWNyZXQiOiJianVpdml2Q21vVUlHVXpYIiwib3duZXJOYW1lIjoiUGFua2FqIFNpbmdoIiwib3duZXJFbWFpbCI6InJhd2F0cGFua3U5OTFAZ21haWwuY29tIiwicm9sbE5vIjoiNzMwNDEwMTAxMDEyIn0.u25I9ZSK1rcxDwYtNmC-XJi3waCOxiZeCL-qyARJoh4"


      const res = await fetchUsers("http://20.244.56.144/test/users",{
        method:"GET",
        headers:{
          'Authorization':'Bearer & {token}',
          'Content-Type':'application/json',
        }
      });

      const data = await res.json();

      setUsers(data)
    }

    fetchUsers();
  })


 
  return users;

}



