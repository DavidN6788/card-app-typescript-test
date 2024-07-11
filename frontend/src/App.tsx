import {useState, useContext, ChangeEvent, MouseEvent} from 'react'
import NavBar from './components/NavBar'
import AllEntries from './routes/AllEntries'
import NewEntry from './routes/NewEntry'
import EditEntry from './routes/EditEntry'
import Settings from './routes/Settings'
import { EntryProvider } from './utilities/globalContext'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
      <section className="dark:bg-slate-700 h-screen">
      <Router>
      <EntryProvider>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<AllEntries/>}>
          </Route>
          <Route path="create" element={<NewEntry/>}>
          </Route>
          <Route path="edit/:id" element={<EditEntry/>}>
          </Route>
          <Route path="settings" element={<Settings/>}>
          </Route>
        </Routes>
      </EntryProvider>
      </Router>
      </section>

  );
}
