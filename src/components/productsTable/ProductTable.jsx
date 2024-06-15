/* eslint-disable react/prop-types */
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import styles from "./productsTable.module.scss";

export default function ProductsTable({ products }) {
  const currency = "$";
  let totalAmount = 0;

  return (
    <TableContainer component={Paper} className={styles.container}>
      <Table>
        <TableHead>
          <TableRow className={styles.headerRow}>
            <TableCell className={styles.header}>Product</TableCell>
            <TableCell className={styles.header}>Price</TableCell>
            <TableCell className={styles.header}>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => {
            totalAmount +=
              parseFloat(product.price) * parseFloat(product.quantity);
            return (
              <TableRow key={product.id}>
                <TableCell>{product.title}</TableCell>
                <TableCell>
                  {currency}
                  {product.price}
                </TableCell>
                <TableCell>× {product.quantity}</TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <TableCell className={styles.totalCell}>Total:</TableCell>
            <TableCell colSpan={2} className={styles.totalCell}>
              {currency}
              {totalAmount}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
