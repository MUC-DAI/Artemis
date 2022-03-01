package de.tum.in.www1.artemis.service.hestia.structural;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonProperty;

class StructuralClass {

    @JsonProperty(required = true)
    private String name;

    @JsonProperty(value = "package", required = true)
    private String packageName;

    private String superclass;

    @JsonProperty(defaultValue = "false")
    private boolean isInterface;

    @JsonProperty(defaultValue = "false")
    private boolean isEnum;

    private String[] interfaces;

    public StructuralClass() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public String getSuperclass() {
        return superclass;
    }

    public void setSuperclass(String superclass) {
        this.superclass = superclass;
    }

    public boolean isInterface() {
        return isInterface;
    }

    public void setInterface(boolean anInterface) {
        isInterface = anInterface;
    }

    public boolean isEnum() {
        return isEnum;
    }

    public void setEnum(boolean anEnum) {
        isEnum = anEnum;
    }

    public String[] getInterfaces() {
        return interfaces;
    }

    public void setInterfaces(String[] interfaces) {
        this.interfaces = interfaces;
    }

    @Override
    public String toString() {
        return "Class{" + "name='" + name + '\'' + ", packageName='" + packageName + '\'' + ", superclass=" + superclass + ", isInterface=" + isInterface + ", isEnumeration="
                + isEnum + ", interfaces=" + Arrays.toString(interfaces) + '}';
    }
}
