import axios from "axios";
import React, { useEffect, useState } from "react";

const useSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios("../skills.json")
      .then((skill) => setSkills(skill.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return { skills, loading, error };
};

export default useSkills;
