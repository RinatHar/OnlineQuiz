# ============================================
# Api Build
# ============================================
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS api-build
WORKDIR /source

# Копируем всё содержимое (включая .csproj, .props и т.д.)
COPY . .

# Восстанавливаем зависимости и публикуем UserService
WORKDIR /source/src/OnlineQuiz/OnlineQuiz.API
RUN dotnet restore
RUN dotnet publish -c Release -o /app/api

# ============================================
# Api Runtime
# ============================================
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS api-runtime
WORKDIR /app
EXPOSE 8080
COPY --from=api-build /app/api .
ENTRYPOINT ["dotnet", "OnlineQuiz.API.dll"]