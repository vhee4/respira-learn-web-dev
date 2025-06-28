export const contentBasedOnRole: Record<string, string> = {
  doctor: `
                        In a busy hospital setting, doctors play a critical role in early patient assessment. When a patient presents with chest pain, the first step is to <span style="color: yellow; font-weight: 700;">take vital signs and history</span> to understand the condition before starting treatment. One common emergency they face is <span style="color: yellow; font-weight: 700;">respiratory distress</span>, often identified by <span style="color: yellow; font-weight: 700;">difficulty breathing</span> and confirmed using diagnostic tools like a <span style="color: yellow; font-weight: 700;">chest X-ray</span>. Through auscultation, doctors <span style="color: yellow; font-weight: 700;">listen for abnormal lung sounds</span> to detect conditions like airway obstruction.
                        In emergencies, the <span style="color: yellow; font-weight: 700;">Basic Life Support (BLS)</span> protocol starts with <span style="color: yellow; font-weight: 700;">checking the scene for safety</span>. A key indicator of oxygen status is <span style="color: yellow; font-weight: 700;">oxygen saturation</span>, with healthy adults maintaining levels between <span style="color: yellow; font-weight: 700;">95-100%</span>. In life-threatening conditions such as <span style="color: yellow; font-weight: 700;">anaphylaxis</span>, immediate <span style="color: yellow; font-weight: 700;">airway management</span> is essential.
                        Medications like <span style="color: yellow; font-weight: 700;">Salbutamol</span> are used in emergency asthma management. Doctors watch for <span style="color: yellow; font-weight: 700;">blue lips or fingertips</span>, a classic sign of <span style="color: yellow; font-weight: 700;">hypoxia</span>. In severe cases, such as a patient with <span style="color: yellow; font-weight: 700;">COVID-19</span> and respiratory distress, providing <span style="color: yellow; font-weight: 700;">supplemental oxygen</span> is a life-saving step.
`,
  nurse: `
                        Nurses are essential in monitoring and supporting patients. When a patient shows <span style="color: yellow; font-weight: 700;">signs of respiratory distress</span>, the nurse should <span style="color: yellow; font-weight: 700;">inform the doctor immediately</span>. Before starting <span style="color: yellow; font-weight: 700;">oxygen therapy</span>, nurses must <span style="color: yellow; font-weight: 700;">check the oxygen flow rate and equipment</span> for safety and effectiveness.
                        To improve breathing, patients are positioned in a <span style="color: yellow; font-weight: 700;">Semi-Fowler's</span> position. Early signs of <span style="color: yellow; font-weight: 700;">hypoxia</span> require monitoring with tools like pulse oximeters, aiming for a <span style="color: yellow; font-weight: 700;">respiratory rate</span> of <span style="color: yellow; font-weight: 700;">12-20 breaths per minute</span> in healthy adults.
                        Faulty oxygen equipment can pose a <span style="color: yellow; font-weight: 700;">fire hazard</span>. If a patient removes their oxygen mask, the nurse should <span style="color: yellow; font-weight: 700;">encourage and assist them to wear it properly</span>. To prevent lung complications, nurses promote <span style="color: yellow; font-weight: 700;">deep breathing and coughing exercises</span>.
                        After administering oxygen, it is crucial to document the <span style="color: yellow; font-weight: 700;">type of oxygen device and flow rate</span>. Nurses must act quickly if they observe <span style="color: yellow; font-weight: 700;">cyanosis (blue lips or skin)</span>, as this signals severe oxygen deprivation.`,
  respiratory_therapist: `
                        Respiratory therapists specialize in managing breathing difficulties. In emergencies, a <span style="color: yellow; font-weight: 700;">Non-rebreather mask</span> delivers high-concentration oxygen to patients. To assess lung function, therapists use a <span style="color: yellow; font-weight: 700;">peak flow meter</span>.

For patients with airway collapse, <span style="color: yellow; font-weight: 700;">Continuous Positive Airway Pressure (CPAP)</span> is used to keep airways open. During asthma attacks, <span style="color: yellow; font-weight: 700;">bronchodilator therapy</span> with <span style="color: yellow; font-weight: 700;">Salbutamol</span> helps restore airflow.

If a ventilated patient’s oxygen levels drop, the likely cause is a <span style="color: yellow; font-weight: 700;">leak or disconnection in the circuit</span>. Lung function is assessed using <span style="color: yellow; font-weight: 700;">spirometry</span>. When <span style="color: yellow; font-weight: 700;">wheezing</span> is heard during auscultation, it often indicates <span style="color: yellow; font-weight: 700;">airway obstruction or narrowing</span>.

In severe distress, <span style="color: yellow; font-weight: 700;">chest muscle retractions</span> indicate increased work of breathing. To maintain airway moisture and comfort, <span style="color: yellow; font-weight: 700;">humidification of oxygen</span> is recommended for <span style="color: yellow; font-weight: 700;">high flow rates or prolonged therapy</span>.
`,
  paramedic: `
                        Paramedics are the first responders to respiratory emergencies. On arrival, their first action is to <span style="color: yellow; font-weight: 700;">check scene safety</span>. For airway management, they rely on essential tools like a <span style="color: yellow; font-weight: 700;">bag-valve mask</span>.

Severe respiratory distress presents with <span style="color: yellow; font-weight: 700;">use of accessory muscles</span>. In cases of anaphylaxis, administering <span style="color: yellow; font-weight: 700;">Adrenaline (epinephrine)</span> immediately can be life-saving.

Paramedics look for signs of <span style="color: yellow; font-weight: 700;">cyanosis</span>, indicating <span style="color: yellow; font-weight: 700;">oxygen deficiency</span>. To open the airway in unconscious patients, they perform the <span style="color: yellow; font-weight: 700;">head-tilt chin-lift</span> maneuver.

For severe hypoxia, a <span style="color: yellow; font-weight: 700;">Non-rebreather mask</span> provides high-flow oxygen. During CPR with two rescuers, the <span style="color: yellow; font-weight: 700;">30:2 compression-to-ventilation ratio</span> is applied.

Paramedics monitor <span style="color: yellow; font-weight: 700;">oxygen saturation</span> to track breathing status. To ease breathing, patients are transported <span style="color: yellow; font-weight: 700;">sitting upright if tolerated</span>.
`,
  medical_student: `
                        Medical students are taught to recognize respiratory emergencies early. A healthy <span style="color: yellow; font-weight: 700;">adult respiratory rate</span> ranges between <span style="color: yellow; font-weight: 700;">12-20 breaths per minute</span>. A common cause of distress is <span style="color: yellow; font-weight: 700;">asthma</span>, marked by airway narrowing.

A sign of low oxygen is <span style="color: yellow; font-weight: 700;">cyanosis</span>, indicating <span style="color: yellow; font-weight: 700;">decreased oxygen in the blood</span>. To check oxygen levels, students use a <span style="color: yellow; font-weight: 700;">pulse oximeter</span>.

Wheezing heard during auscultation often suggests <span style="color: yellow; font-weight: 700;">asthma</span>. Symptoms unrelated to breathing issues, like <span style="color: yellow; font-weight: 700;">slow digestion</span>, are not considered signs of respiratory distress.

In choking emergencies where a patient <span style="color: yellow; font-weight: 700;">cannot speak</span>, the <span style="color: yellow; font-weight: 700;">Heimlich maneuver</span> is performed immediately. For breathing difficulty, patients are positioned <span style="color: yellow; font-weight: 700;">sitting upright</span>.

The purpose of <span style="color: yellow; font-weight: 700;">oxygen therapy</span> is to <span style="color: yellow; font-weight: 700;">increase oxygen levels</span>. Students follow the <span style="color: yellow; font-weight: 700;">ABC approach</span> in emergencies, starting with the <span style="color: yellow; font-weight: 700;">Airway</span>.

                        `
};
