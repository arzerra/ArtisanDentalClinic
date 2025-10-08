import { useEffect, useState } from "react";
import { supabase } from "../../../supabase.js";
import Swal from "sweetalert2";

function AddPatient() {
  const [name, setName] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [patients, setPatients] = useState([]);

  const addPatient = async () => {
    const newPatientData = {
      full_name: name,
      contact_num: contactNum,
      birthdate,
      gender,
    };

    const { data, error } = await supabase
      .from("patients")
      .insert([newPatientData])
      .select()
      .single(); // no <Patient>

    if (error) {
      Swal.fire({ title: "Error", text: error.message, icon: "error" });
    } else if (data) {
      Swal.fire({
        title: "Patient Added!",
        text: "The new patient record was successfully saved.",
        icon: "success",
      });

      setPatients((prev) => [...prev, data]);
      setName("");
      setContactNum("");
      setBirthdate("");
      setGender("");
    }
  };

  const fetchPatient = async () => {
    const { data, error } = await supabase.from("patients").select("*");

    if (error) {
      Swal.fire({ title: "Error", text: error.message, icon: "error" });
    } else {
      setPatients(data ?? []);
    }
  };

  useEffect(() => {
    fetchPatient();
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-row w-full p-6 max-w-[1100px] items-center justify-between">
        {/* Form */}
        <div className="flex flex-col justify-center items-center w-1/2">
          <h1>Add New Patient</h1>
          <div className="flex flex-col items-start justify-center">
            <div className="mt-5">
              <label>Name: </label>
              <input
                type="text"
                className="border rounded-lg px-2 py-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mt-5">
              <label>Contact Number: </label>
              <input
                type="tel"
                className="border rounded-lg px-2 py-1"
                value={contactNum}
                onChange={(e) => setContactNum(e.target.value)}
                pattern="\d{11}"
                maxLength={11}
                placeholder="e.g. 09123456789"
                required
              />
            </div>

            <div className="mt-5 flex flex-row gap-4 justify-center items-center">
              <label>Birthday:</label>
              <input
                type="date"
                className="border rounded-lg px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>

            <div className="mt-5 flex flex-row gap-4">
              <label>Gender: </label>
              <div className="flex gap-4">
                {["Male", "Female", "Other"].map((g) => (
                  <label key={g} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={gender === g}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    {g}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <button
            className="flex cursor-pointer items-center justify-center px-5 py-3 rounded-xl mt-5 bg-green-200"
            onClick={addPatient}
          >
            Add
          </button>
        </div>

        {/* List */}
        <div className="w-1/2">
          <ul>
            {patients.map((patient) => (
              <li
                key={patient.patient_id}
                className="border rounded-lg px-3 py-2 shadow-sm"
              >
                <p>{patient.name}</p>
                <p>{patient.contact_num}</p>
                <p>{patient.birthdate}</p>
                <p>{patient.gender}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AddPatient;
