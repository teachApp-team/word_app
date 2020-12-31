import React,  { useState, useEffect }  from 'react';
import {Container,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import Header from '../../components/Layout/Header';
import Link from 'next/link'
import { useRouter } from 'next/router';
import axios from 'axios';
import Skeleton from '@material-ui/lab/Skeleton';


export default function AfterTest(props) {
  let iniLoading = {loading: true};
  const [loading, setLoading] = useState(iniLoading);

  const router = useRouter()
  console.log(router)
  const testId = router.query.test_id
  let iniData = [{japanese:"日本語", english:"English", wrong_count:0}]
  const [data, setData] = useState(iniData);
  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/tests/finish/"+ String(testId)).then( res => {
    console.log('結果データ取得')
    setData(res.data)
    console.log(data);
    setLoading({ loading: false});
    })
  }, []);
  
  console.log(data);
  return (
    <Container disableGutters={true}>
      <Header/>
      <Container maxWidth="lg" style={{margin:"20px auto" }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell align="right">問題</TableCell>
                <TableCell align="right">答え</TableCell>
                <TableCell align="right">間違えた回数</TableCell>
              </TableRow>
            </TableHead>
            {loading.loading ? (
              <TableBody>
                <TableRow >
                  <TableCell component="th" scope="row">
                    <Skeleton animation="wave" />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" />
                  </TableCell>
                </TableRow>
                <TableRow >
                  <TableCell component="th" scope="row">
                    <Skeleton animation="wave" />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" />
                  </TableCell>
                </TableRow>
                <TableRow >
                  <TableCell component="th" scope="row">
                    <Skeleton animation="wave" />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" />
                  </TableCell>
                  <TableCell align="right">
                    <Skeleton animation="wave" />
                  </TableCell>
                </TableRow>
              </TableBody>
            ):(
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="right">{row.englifh}</TableCell>
                    <TableCell align="right">{row.japanese}</TableCell>
                    <TableCell align="right">{row.wrong_count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Container>
      <Link href="../">
        <a>Go to index page</a>
      </Link>
      <br></br>
      <Link href="../textInfo">
        <a>Go to textInfo page</a>
      </Link>
      <br></br>
      <Link href="../learningCondition">
        <a>Go to learningCondition page</a>
      </Link>
      <br></br>
      <Link href={'/afterTest/' + String(testId)}>
        <a>Go to afterTest page1</a>
      </Link>
    </Container>
  );
}







// class Index extends Component {
//   constructor(props) {
//     super(props);
//     const rows = this.props.data
//     const router = useRouter();
//     this.state = {
//       testId : router.query.test_id
//     }
//   }
//   render(){
//     console.log("")
//     return (
//       <Container disableGutters={true}>
//         <Header/>
//         <h1>{this.props.router.test_id}</h1>
//         <Container maxWidth="lg" style={{margin:"20px auto" }}>
//           <TableContainer component={Paper}>
//             <Table aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>No</TableCell>
//                   <TableCell align="right">問題</TableCell>
//                   <TableCell align="right">答え</TableCell>
//                   <TableCell align="right">間違えた回数</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {this.props.data.map((row) => (
//                   <TableRow key={row.name}>
//                     <TableCell component="th" scope="row">
//                       {row.No}
//                     </TableCell>
//                     <TableCell align="right">{row.English}</TableCell>
//                     <TableCell align="right">{row.Japanese}</TableCell>
//                     <TableCell align="right">0</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Container>
//         <Link href="/">
//           <a>Go to index page</a>
//         </Link>
//         <br></br>
//         <Link href="/textInfo">
//           <a>Go to textInfo page</a>
//         </Link>
//         <br></br>
//         <Link href="/learningCondition">
//           <a>Go to learningCondition page</a>
//         </Link>
//         <br></br>
//         <Link href="/afterTest">
//           <a>Go to afterTest page</a>
//         </Link>
//       </Container>
//     );
//   }
// }
  
// Index = connect((state) => state)(Index);
// export default Index;