package de.tum.in.www1.artemis.service.hestia.structural;

public class StructuralSolutionEntryGenerationException extends Exception {

    private static final String MESSAGE_PREFIX = "Unable to generate structural solution entries: ";

    public StructuralSolutionEntryGenerationException(String message) {
        super(MESSAGE_PREFIX + message);
    }

    public StructuralSolutionEntryGenerationException(Throwable cause) {
        super(MESSAGE_PREFIX, cause);
    }

    public StructuralSolutionEntryGenerationException(String message, Throwable cause) {
        super(MESSAGE_PREFIX + message, cause);
    }
}
