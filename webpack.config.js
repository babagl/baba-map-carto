const path = require("path");

module.exports = {
  mode: "development", // Ou 'production' pour la version de production
  entry: "./src/index.ts", // Point d'entrée de votre application
  output: {
    filename: "bundle.js", // Le fichier de sortie
    path: path.resolve(__dirname, "dist"), // Le dossier de sortie pour les fichiers empaquetés
  },
  resolve: {
    extensions: [".ts", ".js"], // Ajoutez '.tsx' si vous utilisez React avec TypeScript
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Utilisez le chargeur TypeScript pour tous les fichiers .ts
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Chemin vers le dossier contenant les fichiers statiques
    },
    hot: true, // Active le Hot Module Replacement
    open: true, // Ouvre le navigateur après le démarrage du serveur
  },
};
