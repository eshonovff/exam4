import { useEffect, useState } from "react";
import axios from "axios";
import { Input, Modal, Button, Space, Select } from "antd";
import FileBase64 from "react-file-base64";
import { useFormik } from "formik";
import * as Yup from "yup";

const { Option } = Select;

const Gallery = () => {
  const api = "https://6676861a145714a1bd71fdce.mockapi.io/rd";
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(api);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenAddModal = () => setAddModalOpen(true);

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
    formikAdd.resetForm();
    setFile(null);
  };

  const handleOpenEditModal = (item) => {
    setEditId(item.id);
    setFile(item.file);
    formikEdit.setValues({
      name: item.name,
      email: item.email,
      status: item.status,
    });
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    formikEdit.resetForm();
    setFile(null);
    setEditId(null);
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name is too short")
      .max(30, "Name is too long")
      .required("Please enter a name"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter an email"),
  });

  const formikAdd = useFormik({
    initialValues: {
      name: "",
      email: "",
      status: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const postData = { ...values, file };
        await axios.post(api, postData);
        console.log("User added successfully:", postData);
        getData();
        handleCloseAddModal();
      } catch (error) {
        console.error("Error adding user:", error);
      }
    },
  });

  const formikEdit = useFormik({
    initialValues: {
      name: "",
      email: "",
      status: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const postData = { ...values, file };
        await axios.put(`${api}/${editId}`, postData);
        getData();
        handleCloseEditModal();
      } catch (error) {
        console.error("Error editing user:", error);
      }
    },
  });

  const handleFileChange = (file) => setFile(file.base64);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${api}/${id}`);
      getData();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleStatusFilterChange = (value) => setStatusFilter(value);

  const filteredData = data.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = 
      statusFilter === "all" ||
      (statusFilter === "active" && item.status) ||
      (statusFilter === "inactive" && !item.status);
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="w-[100%] px-[5%] py-20 h-[auto] dark:bg-[#056088] pb-[140px]">
        <div className="flex justify-between items-center mb-4">
          <Input
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
            style={{ width: "300px" }}
          />
          <Select
            value={statusFilter}
            onChange={handleStatusFilterChange}
            style={{ width: "150px" }}
          >
            <Option value="all">All</Option>
            <Option value="active">Active</Option>
            <Option value="inactive">Inactive</Option>
          </Select>
          <Button
            type="primary"
            onClick={handleOpenAddModal}
            className="w-[150px] h-[40px] dark:bg-[white] dark:text-[#056088]"
          >
            Add
          </Button>
        </div>
        <div className="flex flex-wrap justify-between  items-center">
          {filteredData.map((item) => (
            <div className="w-[100%] max-w-[400px] h-[370px] shadow-md p-2 mb-4" key={item.id}>
              <img
                src={item.file}
                alt={item.name}
                className="w-[100%] h-[260px]"
              />
              <h1>{item.name}</h1>
              <p>{item.email}</p>
              <p
                style={{ color: item.status ? "green" : "red" }}
              >
                {item.status ? "Active" : "Inactive"}
              </p>
              <Space>
                <Button
                  type="primary"
                  onClick={() => handleOpenEditModal(item)}
                >
                  Edit
                </Button>
                <Button type="danger" onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </Space>
            </div>
          ))}
          <div className="w-[100%] h-[100px] flex justify-center items-center p-[10px]  mt-[20px]">
            <h1 className="text-center text-[20px] text-[#056088] dark:text-[white]">
              See more
            </h1>
          </div>
        </div>
      </div>

      <Modal
        title="Add User"
        open={addModalOpen}
        onCancel={handleCloseAddModal}
        footer={[
          <Button key="back" onClick={handleCloseAddModal}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={formikAdd.handleSubmit}>
            Submit
          </Button>,
        ]}
      >
        <form onSubmit={formikAdd.handleSubmit}>
          <FileBase64 onDone={handleFileChange} />
          <Input
            placeholder="Your Name"
            name="name"
            value={formikAdd.values.name}
            onChange={formikAdd.handleChange}
          />
          {formikAdd.touched.name && formikAdd.errors.name ? (
            <div style={{ color: "red" }}>{formikAdd.errors.name}</div>
          ) : null}
          <Input
            placeholder="Your Email"
            name="email"
            value={formikAdd.values.email}
            onChange={formikAdd.handleChange}
          />
          {formikAdd.touched.email && formikAdd.errors.email ? (
            <div style={{ color: "red" }}>{formikAdd.errors.email}</div>
          ) : null}
          <Select
            name="status"
            value={formikAdd.values.status}
            onChange={(value) => formikAdd.setFieldValue("status", value)}
            style={{ width: "100%", marginTop: "10px" }}
          >
            <Option value={true}>Active</Option>
            <Option value={false}>Inactive</Option>
          </Select>
        </form>
      </Modal>

      <Modal
        title="Edit User"
        open={editModalOpen}
        onCancel={handleCloseEditModal}
        footer={[
          <Button key="back" onClick={handleCloseEditModal}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={formikEdit.handleSubmit}>
            Submit
          </Button>,
        ]}
      >
        <form onSubmit={formikEdit.handleSubmit}>
          <FileBase64 onDone={handleFileChange} />
          <Input
            placeholder="Your Name"
            name="name"
            value={formikEdit.values.name}
            onChange={formikEdit.handleChange}
          />
          {formikEdit.touched.name && formikEdit.errors.name ? (
            <div style={{ color: "red" }}>{formikEdit.errors.name}</div>
          ) : null}
          <Input
            placeholder="Your Email"
            name="email"
            value={formikEdit.values.email}
            onChange={formikEdit.handleChange}
          />
          {formikEdit.touched.email && formikEdit.errors.email ? (
            <div style={{ color: "red" }}>{formikEdit.errors.email}</div>
          ) : null}
          <Select
            name="status"
            value={formikEdit.values.status}
            onChange={(value) => formikEdit.setFieldValue("status", value)}
            style={{ width: "100%", marginTop: "10px" }}
          >
            <Option value={true}>Active</Option>
            <Option value={false}>Inactive</Option>
          </Select>
        </form>
      </Modal>
    </div>
  );
};

export default Gallery;
