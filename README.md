# Student Search App 🔍

A full-stack web application with a search bar and lazy loading functionality to search students efficiently. Built with **React.js** and **Express.js**, optimized for performance and scalability.

---

## 🌐 Live Demo

* **Frontend (Vercel)**: [https://student-search-app-three.vercel.app](https://student-search-app-three.vercel.app)
* **Backend (Render)**: [https://student-search-app-ct52.onrender.com](https://student-search-app-ct52.onrender.com)

  > ⚠️ *Note: Render has a cold start, so the backend may take a few seconds to respond initially.*

---

## 🛠️ Tech Stack

### Frontend (React + Vite)

* React 19
* Tailwind CSS 4
* Axios
* TypeScript
* ShadCn UI
* Lucide-react (icons)
* Radix UI
* Debouncing, prefix matching, and dynamic dropdown

### Backend (Node + Express)

* Express 5
* TypeScript
* Stream JSON + Stream Chain (for efficient large file processing)
* Zod (schema validation)
* Dotenv, CORS

---

## 📁 Project Structure

```
student_search_app/
├── client/      # React frontend
├── server/      # Node/Express backend
```

---

## 🚀 Features

### ✅ Frontend

* Search starts only after **3 characters** (lazy loading).
* Handles:

  * Less than 3 characters
  * Numeric and special characters
  * Extra/multiple spaces
* Debounced input for optimized performance.
* Text highlighting in search results.
* Displays full student details on selection.
* Robust state management: loading, error, empty result.
* Cancel request on component unmount.
* Mobile & desktop responsive design.

### ✅ Backend

* Reads and streams student data from a large local JSON file.
* Uses **stream-json** for **memory efficiency**.
* Implements **Zod** for input validation.
* Query params supported: `GET /search?searchQuery=...`
* Returns up to **5 matches**, case-insensitive, prefix-based.
* Fully typed with **TypeScript**.

---

## ⚙️ Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Mandeep56Singh/student_search_app.git
cd student_search_app
```

### 2. Backend Setup (Server)

```bash
cd server
npm install
```

#### Environment Variables

Create a `.env` file in `/server`:

```env
PORT=5000
ORIGIN=http://localhost:5173
NODE_ENV=development
```

#### Start Backend

```bash
npm run dev
```

### 3. Frontend Setup (Client)

```bash
cd ../client
npm install
```

#### Environment Variables

Create a `.env` file in `/client`:

```env
VITE_API_URL=http://localhost:5000
```

#### Start Frontend

```bash
npm run dev
```

App should be available at: [http://localhost:5173](http://localhost:5173)

---

## 📦 API Endpoint

### `GET /search?searchQuery=...`

#### Query Parameters:

* `searchQuery`: string (required, minimum 3 characters)

#### Example:

```http
GET http://localhost:5000/search?searchQuery=man
```

#### Sample Response:

```json
[
  {
    "name": "Manpreet Singh",
    "rollNumber": "102",
    "class": "10B"
  },
  {
    "name": "Mandeep Kaur",
    "rollNumber": "107",
    "class": "10C"
  }
]
```

✅ Returns up to **5 prefix-based**, **case-insensitive** matches.
⚠️ Special characters, numbers, or inputs under 3 characters are rejected with validation errors.


---

## ✅ Assignment Checklist

* [x] Search with debounce and lazy load after 3 characters
* [x] Case-insensitive, prefix-based search
* [x] Highlight matching text
* [x] Dropdown of up to 5 students
* [x] Display full student details on selection
* [x] Stream JSON parsing on backend for efficiency
* [x] Fully typed (TypeScript)
* [x] Request cancellation
* [x] Deployed frontend and backend

---

## 📄 License

MIT

---


