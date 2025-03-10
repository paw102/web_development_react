import { Card,  CardContent, Typography } from "@mui/material";


export default function MyCard() {
  return (
    <Card sx={{
      maxWidth:300,
      padding:2,
      }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Material UI Card
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          이 카드는 Material UI 를 이용해서 만들었습니다.
        </Typography>
      </CardContent>
    </Card>
  );
}