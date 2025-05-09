import React,{useState} from "react";
import { AppBar, Toolbar, Typography,TextField,Box , Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,} from "@mui/material";

    const rows = [
        { id: 1,  productId: 9934, productName: "$120", price: 20, stock: 20 },
        { id: 2,  productId: 7899, productName: "$120", price: 20, stock: 20 },
        { id: 3,  productId: 9875, productName: "$120", price: 20, stock: 20 },
      ];
    

const Dashboard = () => {
    const [selected, setSelected] = useState<number[]>([]);

    const handleCheckboxClick = (id: number) => {
      setSelected((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    };
  return (
    <>
    <AppBar position="static" className="bg-black shadow-sm" sx={{backgroundColor:"black",boxShadow:"0px 4px 12px rgba(0, 0, 0, 0.5)",minHeight:130}}>
<Toolbar sx={{minHeight:130,display:'flex',justifyContent:'space-between',alignItems:'center',paddingX:4 }}>
<Typography variant="h4" sx={{color:'#dcf245',fontSize:'1.75rem',m:2,fontWeight:'bold'}}>
    SAMP MART
</Typography>


    <Box sx={{ width: "100%", maxWidth: 400 }}>
          <TextField
            variant="outlined"
            label="Search"
            placeholder="Search here..."
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
            }}
          />
        </Box>
 </Toolbar>
    </AppBar>
    <Typography  variant="h4" sx={{color:"white",fontSize:'2rem',margin:'40px', display:"flex",justifyContent:"center"}}>
      Current Sale
    </Typography>
    <Typography  variant="h4" sx={{color:"white",fontSize:'1.5rem',margin:'40px', display:"flex",justifyContent:"center"}}>
      Product List 
    </Typography>
 
    <Box sx={{ px: 4, py: 2 }}>
  <TableContainer component={Paper} sx={{ backgroundColor: "#000",boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)", borderRadius: 2}}>
    <Table  sx={{
    "& th, & td": {
      fontSize: "0.95rem", 
      color: "white"
    },
  }}>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox" sx={{ color: "white",fontSize: "0.95rem" }}></TableCell>
          <TableCell sx={{ color: "white",fontSize: "0.95rem" }}><strong>Product ID</strong></TableCell>
          <TableCell sx={{ color: "white" ,fontSize: "0.95rem"}}><strong>Product Name</strong></TableCell>
          <TableCell sx={{ color: "white" ,fontSize: "0.95rem"}}><strong>Price</strong></TableCell>
          <TableCell sx={{ color: "white",fontSize: "0.95rem" }}><strong>Stock</strong></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id} hover sx={{ "&:hover": { backgroundColor: "#111" } }}>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selected.includes(row.id)}
                onChange={() => handleCheckboxClick(row.id)}
                sx={{ color: "white" }}
              />
            </TableCell>
            <TableCell contentEditable="true" sx={{ color: "white" ,fontSize: "0.95rem"}}>{row.productId}</TableCell>
            <TableCell contentEditable="true" sx={{ color: "white" ,fontSize: "0.95rem" }}>{row.productName}</TableCell>
            <TableCell contentEditable="true" sx={{ color: "white",fontSize: "0.95rem" }}>${row.price}</TableCell>
            <TableCell contentEditable="true" sx={{ color: "white" ,fontSize: "0.95rem"}}>{row.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Box>

    </>
  )
}

export default Dashboard