import { useState } from "react";

const brothers = [
  "이태섭", "김진우", "이동환", "문지훈", "박지웅", "김인수",
  "최재혁", "남준혁", "전도영", "김권비", "김두현", "전호성",
  "김민호", "박효원"
];

const sisters = [
  "전효진", "고다영", "남소연", "김유나", "정여진", "김민서",
  "김이안", "박지혜", "이현화", "심재경", "유지연", "김소은",
  "임도해", "심규리", "이소희", "심예림"
];

export default function App() {
  const [attendance, setAttendance] = useState({});

  const toggle = (name) => {
    setAttendance((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const renderList = (title, names) => (
    <div className="flex-1 p-4">
      <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
      <div className="grid grid-cols-2 gap-2">
        {names.map((name) => (
          <div
            key={name}
            onClick={() => toggle(name)}
            className={
              "p-3 rounded-xl shadow-md text-center cursor-pointer text-base font-medium transition-all " +
              (attendance[name] ? "bg-green-400 text-white" : "bg-white")
            }
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-8">📋 출석부</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {renderList("형제", brothers)}
        {renderList("자매", sisters)}
      </div>
    </div>
  );
}
