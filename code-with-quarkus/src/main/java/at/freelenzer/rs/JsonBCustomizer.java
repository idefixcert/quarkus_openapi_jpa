package at.freelenzer.rs;

import io.quarkus.jsonb.JsonbConfigCustomizer;
import jakarta.inject.Singleton;
import jakarta.json.bind.JsonbConfig;
import jakarta.json.bind.config.PropertyNamingStrategy;

@Singleton
public class JsonBCustomizer implements JsonbConfigCustomizer {

    public void customize(JsonbConfig config) {
        config.withPropertyNamingStrategy(PropertyNamingStrategy.LOWER_CASE_WITH_UNDERSCORES);
    }
}