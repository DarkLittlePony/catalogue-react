// BOUCHON posé par le lead technique : il respecte le contrat du sprint 1, et rien de plus.
// Avec lui, personne n'est jamais connecté.
// TODO BIB-1 (A) : remplacer tout ce fichier par le vrai contexte de connexion.
import { createContext, useContext, useState } from 'react';

// Qui est connecté : une valeur que toute l'application peut lire, sans la passer de main en main.
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [utilisateur, setUtilisateur] = useState(null);

  const valeur = { utilisateur, connecter: setUtilisateur, deconnecter: () => setUtilisateur(null), };

  return <AuthContext value={valeur}>{children}</AuthContext>;
}

export function useAuth() {
  const contexte = useContext(AuthContext);
  if (!contexte) {
    throw new Error('useAuth doit être utilisé dans un <AuthProvider>.');

  } return contexte;
}
