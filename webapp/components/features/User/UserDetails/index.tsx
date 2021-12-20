import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { getMyUser, Customer } from "./graphql";

function UserDetails() {
  const { loading, data: user, error } = getMyUser();

  if (error) {
    return <div>Internal Error, please try again or contact support!</div>;
  }

  if (!loading && !user) {
    return <div>No User</div>;
  }

  return (
    <Card sx={{ minWidth: 275 }} color="">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          User Details
        </Typography>
        <Typography variant="h5" component="div">
          {`${user?.profile?.firstName} ${user?.profile?.lastName}`}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {user?.profile?.email}
        </Typography>
        <Typography variant="body2">
          {/* assume it's customer for now */}
          Booking counts : {(user as Customer)?.bookings?.length}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
}

export default UserDetails;
