# ATS
ATS

```text
  ├── api/
  │   └── main.py
  ├── model/
  │   ├── model.pkl
  │   └── vectorizer.pkl
  ├── data/
  │   ├── UpdatedResumeDataSet.csv
  │   └── Shubham-Kumar-2.pdf
  ├── frontend/
  │   ├── index.html
  │   ├── style.css
  │   └── script.js
  └── requirements.txt
```

## Deploy to a VPS with Docker

The Docker image serves the frontend and FastAPI API from the same origin. The
Compose service listens on port `8000` by default, so the app is available at
`http://<VPS-IP>:8000`.

### One-time VPS setup

Install Docker Engine and the Docker Compose plugin on the VPS, allow inbound
traffic to port `8000` in the VPS firewall, then clone the repository at the
path used by the deployment workflow:

```sh
sudo mkdir -p /opt/ats
sudo chown "$USER":"$USER" /opt/ats
git clone https://github.com/VibhuSahu/ATS.git /opt/ats
cd /opt/ats
docker compose up -d --build
```

For a private repository, use the SSH clone URL instead and configure a GitHub
deploy key on the VPS so `git pull` can fetch the repository.

### GitHub Actions setup

In the repository's **Settings → Secrets and variables → Actions**, add these
repository or `production` environment secrets:

| Secret | Value |
| --- | --- |
| `VPS_HOST` | VPS IP address or hostname |
| `VPS_USER` | SSH user that owns `/opt/ats` and can run Docker |
| `SSH_PRIVATE_KEY` | Private SSH key for that VPS user |
| `VPS_PORT` | SSH port; optional (defaults to `22`) |

Push to `main` or run **Deploy ATS** manually from the Actions tab. The workflow
pulls the latest `main` on the VPS and rebuilds/restarts the Compose service.
For HTTPS or a custom domain, put a reverse proxy such as Caddy or Nginx in
front of the app.