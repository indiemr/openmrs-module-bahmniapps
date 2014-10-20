Bahmni.Clinical.DiseaseTemplateMapper = function (diseaseTemplateResponse, allConceptsConfig) {
    if (diseaseTemplateResponse.observationTemplates && diseaseTemplateResponse.observationTemplates.length > 0) {
        var allObsTemplates = [];
        diseaseTemplateResponse.observationTemplates.forEach(function (obsTemplate) {
            var observations = [];
            if (obsTemplate.bahmniObservations.length > 0) {
                observations = new Bahmni.Common.Obs.ObservationMapper().map(obsTemplate.bahmniObservations, allConceptsConfig);
            }
            allObsTemplates.push(new Bahmni.Clinical.ObservationTemplate(obsTemplate.concept.name, obsTemplate.visitStartDate, observations));
        });
    }
    return Bahmni.Clinical.DiseaseTemplate(diseaseTemplateResponse.name, allObsTemplates);
};
