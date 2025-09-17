from flask import Flask, request, jsonify
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, db
import os
import datetime
from Keys.FirebaseAppKeys import init_firebase
app = Flask(__name__)
CORS(app) 

app1 = init_firebase()
@app.route("/api/contact", methods=["POST"])
def contact():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Nenhum dado enviado"}), 400
        data["timestamp"] = datetime.datetime.utcnow().isoformat()
        ref = db.reference("contacts", app=app1)
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
