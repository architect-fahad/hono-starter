#!/bin/bash

set -e

BASE_URL=${BASE_URL:-http://localhost:3000}

echo "🚀 Checking health endpoint..."

response=$(curl -s "$BASE_URL/health")

status=$(echo "$response" | grep -o '"status":"ok"')

if [[ "$status" != '"status":"ok"' ]]; then
  echo "❌ Health check failed"
  echo "Response: $response"
  exit 1
fi

echo "✅ Backend is healthy!"