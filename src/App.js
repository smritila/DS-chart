import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Reports from "./features/Reports";
import Purchases from "./features/Purchases";
import Sidebar from "./components/Sidebar";
import { Button, Modal } from "antd";
import { useState } from "react";
import AddEditAppLink from "./components/AddEditAppLink";

// import ApiTest from "./features/ApiTest";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Router>
      <div className="bg-gray-100 flex flex-row">
        <Sidebar />
        <main className="flex-1 h-screen p-4 overflow-y-auto ml-sidebar">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Loreum Ipsum</h1>
            <>
              <Button type="primary" onClick={showModal}>
                Update App Link
              </Button>
              <Modal
                title="App Link Details"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <AddEditAppLink />
              </Modal>
            </>
          </div>
          <hr className="border-t-1 my-5 border-gray-300" />

          <Routes>
            <Route path="/reports" element={<Reports />} />
            <Route path="/purchases" element={<Purchases />} />

            {/* <Route path="/" element={<DashBoard />} /> */}
            {/* <Route path="/api-test" element={<ApiTest />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
