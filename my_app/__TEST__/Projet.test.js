const projet = require ("../src/components/Projet");

describe('test_1', () => {
    it('dois récupéré data projet', () => {
        expect(projet.Projet.length).toBeGreaterThan(0);
    });
});