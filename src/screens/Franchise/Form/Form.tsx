import { useState } from "react";
import { IFranchise } from "../../../shared/interfaces/franchise";

export function FranchiseForm({setShowModal}) {
  const [form, setForm] = useState<IFranchise>({
    originalTitle: "",
    translatedTitle: "",
    logo: "",
    type: "",
  });

  return (
    <form>
      <label>Título Original: </label>
      <input
        type="text"
        required
        value={form.originalTitle}
        onChange={(e) => setForm({ ...form, originalTitle: e.target.value })}
      />

      <label>Título Traduzido: </label>
      <input
        type="text"
        value={form.translatedTitle}
        onChange={(e) => setForm({ ...form, translatedTitle: e.target.value })}
      />

      <label>Tipo: </label>
      <select
        required
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="" hidden>
          Selecione...
        </option>
        <option value="franquia">Franquia</option>
        <option value="subfranquia">Subfranquia</option>
      </select>

      <label>Logo</label>
      <input
        type="file"
        required={form.type === "franquia"}
        value={form.logo}
        onChange={(e) => setForm({ ...form, logo: e.target.files[0].name })}
      />
      <button>SALVAR</button>
      <button onClick={()=>setShowModal(false)}>CANCELAR</button>
    </form>
  );
}
