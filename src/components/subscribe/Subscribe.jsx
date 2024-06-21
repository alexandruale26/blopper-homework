import PropTypes from "prop-types";
import { DialogContentText, TextField, Stack, Typography, MenuItem } from "@mui/material";
import * as FormComps from "./formComponents";
import { useForm } from "react-hook-form";
import * as utils from "./utils";

const { features, frequency, emailValidator } = utils;

const Features = ({ features }) => {
  return (
    <FormComps.FeaturesContainer>
      {features.map((feature) => (
        <Stack key={feature} direction="row" gap="1rem" useFlexGap alignItems="center">
          <FormComps.Img component="img" src="icon-list.svg" alt="feature icon" />
          <Typography variant="subtitle2">{feature}</Typography>
        </Stack>
      ))}
    </FormComps.FeaturesContainer>
  );
};
Features.propTypes = { features: PropTypes.array.isRequired };

const Subscribe = ({ open, handleClose, handleFormSubmitted }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { email: "" }, mode: "all" });

  const onClose = () => {
    handleClose();
    // modal close animation takes some time and 'reset' is instant
    setTimeout(() => reset(), 200);
  };

  const onSubmit = (data) => {
    console.log(data);
    // some other stuff
    onClose();
    handleFormSubmitted();
  };

  return (
    <FormComps.Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit(onSubmit),
      }}
    >
      <FormComps.Container>
        <Stack padding="0 1.5rem">
          <FormComps.DialogTitle>Stay updated!</FormComps.DialogTitle>
          <FormComps.DialogContent>
            <DialogContentText>Join 60.000+ product managers receiving monthly updates on:</DialogContentText>

            <Features features={features} />

            <Stack gap="1rem" useFlexGap>
              <Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <FormComps.Label htmlFor="email">Email address</FormComps.Label>
                  {!!errors.email && <FormComps.ErrorLabel>{errors.email.message}</FormComps.ErrorLabel>}
                </Stack>
                <TextField
                  margin="dense"
                  id="email"
                  placeholder="email@company.com"
                  fullWidth
                  variant="outlined"
                  error={!!errors.email}
                  {...register("email", {
                    required: "Valid email required",
                    pattern: {
                      value: emailValidator,
                      message: "Invalid email address",
                    },
                  })}
                />
              </Stack>

              <Stack>
                <FormComps.Label htmlFor="frequency">Newsletter recurrency</FormComps.Label>
                <FormComps.Select id="frequency" defaultValue={frequency[0]} {...register("frequency")}>
                  {frequency.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </FormComps.Select>
              </Stack>
            </Stack>
          </FormComps.DialogContent>

          <FormComps.SubmitButton variant="contained" type="submit" size="large">
            Subscribe to monthly newsletter
          </FormComps.SubmitButton>
        </Stack>
        <img src="illustration-sign-up-desktop.svg" />
      </FormComps.Container>
    </FormComps.Dialog>
  );
};
Subscribe.displayName = "Subscribe";
Subscribe.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleFormSubmitted: PropTypes.func.isRequired,
};

export default Subscribe;
