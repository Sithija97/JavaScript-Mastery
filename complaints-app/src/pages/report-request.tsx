import React, { useState } from "react";
import { Dashboard } from "../layouts";
import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  Toolbar,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BoxContainer } from "../components";
import { useAppDispatch } from "../store/store";
import { createReportRequest } from "../store/reports/reportSlice";
import { IReportRequestData } from "../models";

export const ReportRequest = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [file, setFile] = useState<File | any | null>(null); // Store the selected file object

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = () => {
    console.log("Submit button clicked");
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Category:", category);
    console.log("Status:", status);
    console.log("File:", file);

    const reportData: IReportRequestData = {
      title,
      description,
      category: Number(category),
      status: Number(status),
      fileName: file,
    };

    // dispatch(createReportRequest(reportData));
  };

  return (
    <Dashboard>
      <BoxContainer>
        <Toolbar />
        <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="h5" gutterBottom>
              Report Request
            </Typography>
          </Stack>

          <Card>
            <Box p={3}>
              <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Title"
                  variant="outlined"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  multiline
                  rows={4}
                />
              </FormControl>

              <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
                <InputLabel htmlFor="category-select">Category</InputLabel>
                <Select
                  label="Category"
                  id="category-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <MenuItem value={1}>Category 1</MenuItem>
                  <MenuItem value={2}>Category 2</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
                <InputLabel htmlFor="status-select">Status</InputLabel>
                <Select
                  label="Status"
                  id="status-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem value={1}>Status 1</MenuItem>
                  <MenuItem value={2}>Status 2</MenuItem>
                </Select>
              </FormControl>

              <input
                accept=".jpeg, .jpg, .png, .pdf" // Specify allowed file types
                id="file-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange} // Handle file selection
              />
              <label htmlFor="file-upload">
                <Button variant="outlined" component="span" sx={{ mt: 2 }}>
                  Upload File
                </Button>
                {file && <span>{file.name}</span>}
              </label>

              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{ mt: 2, ml: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Card>
        </Container>
      </BoxContainer>
    </Dashboard>
  );
};