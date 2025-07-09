import React from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./HomePage";

const user = { name: "Alex" }; // Simule un utilisateur connecté

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<HomePage user={user} />); 