# Le Petit Bordey — Site artisanal premium complet

Site vitrine & e-commerce pour Le Petit Bordey avec thème sombre, paiement Stripe et déploiement.

## Structure

- `index.html` — Page d'accueil (hero, histoire, produits, valeurs, contact)
- `boutique.html` — Boutique avec filtres et panier local
- `checkout.html` — Paiement sécurisé Stripe
- `styles.css` — Styles premium, animations, responsive
- `dark-mode.css` — Thème sombre complet
- `script.js` — Gestion panier, produits, recherche, dark mode
- `package.json` — Dépendances et scripts npm
- `netlify.toml` — Configuration déploiement Netlify
- `vercel.json` — Configuration déploiement Vercel
- `images/` — Logo SVG et placeholders
- `alimentation/`, `epices/`, `pot/` — Images produits réels

## Fonctionnalités

✅ **Design premium**
- Palette harmonieuse : vert profond, bois, crème, doré
- Fondu boisé et logo intégré en hero
- Animations fluides et discrètes
- 100% responsive mobile-first

✅ **Thème sombre**
- Toggle accessible en bas à droite (🌙/☀️)
- Couleurs inversées premium
- Persistant via localStorage

✅ **Panier e-commerce**
- Ajout/suppression produits en direct
- Quantités ajustables
- Sommaire en temps réel
- Persistance localStorage

✅ **Paiement Stripe**
- Intégration Stripe Elements
- Clés de test incluses
- Simulation checkout sécurisée
- Redirection vers confirmation

✅ **Optimisation**
- Images SVG pour le logo (scalable)
- Lazy loading (loading="lazy")
- CSS minifiable, JS modulaire
- Sécurité : CORS, CSP headers

✅ **Déploiement**
- Netlify : `netlify.toml` configuré
- Vercel : `vercel.json` configuré
- Support static pages SPA

## Lancement local

```bash
# Ouvrir simplement dans le navigateur
open index.html

# Ou via serveur local (Node + http-server)
npm install
npm run dev

# Serveur accessible à http://localhost:3000
```

## Déploiement

### Netlify
```bash
npm run deploy
# Ou via GitHub, GitLab, Bitbucket direct
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Paiement Stripe (production)
1. Créer compte Stripe Business
2. Remplacer clé publique test dans `checkout.html`
3. Ajouter endpoint serveur pour traiter paiements
4. Implémenter webhook Stripe pour confirmations

## Personnalisation

- **Logo** : Logo SVG généré automatiquement dans `images/logo.svg`
- **Produits** : Éditer liste `PRODUCTS` dans `script.js`
- **Prix** : Directement dans chaque objet produit
- **Couleurs** : Modifier `:root{}` dans `styles.css`
- **Contact** : Mettre à jour email/téléphone en section contact

## Notes de sécurité

⚠️ **À faire avant production** :
- Activez HTTPS partout
- Remplissez champs contact avec vraies coordonnées
- Implémentez webhook Stripe côté serveur
- Validez paiements côté serveur (ne pas faire côté client)
- Anonymisez données utilisateur via Analytics
- Revoyez Politique de confidentialité et Mentions légales

## Support

Tous les fichiers sont autosuffisants et peuvent être ouverts directement en navigateur. Les images produits utilisent les chemins relatifs vers les dossiers réels.

---

**Le Petit Bordey** — Tradition • Famille • Artisanat • Authenticité • Qualité Premium
