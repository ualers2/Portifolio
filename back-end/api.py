from flask import Flask, request, jsonify
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, db
import os
import json
import datetime
from dotenv import load_dotenv
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), 'Keys', '.env'))

cred = credentials.Certificate(os.getenv('DATABASEPATH'))
firebase_app = firebase_admin.initialize_app(cred, {
    'databaseURL': os.getenv('DATABASEURL')
}, name="app1")

app = Flask(__name__)
CORS(app, origins=['https://portifolio-ualerson.site']) 

@app.route("/api/contact", methods=["POST"])
def contact():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Nenhum dado enviado"}), 400
        data["timestamp"] = datetime.datetime.utcnow().isoformat()
        ref = db.reference("contacts", app=firebase_app)
        new_ref = ref.push(data)
        return jsonify({
            "message": "Mensagem salva com sucesso!",
            "id": new_ref.key
        }), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 3001))
    app.run(host="0.0.0.0", port=port, debug=True)
