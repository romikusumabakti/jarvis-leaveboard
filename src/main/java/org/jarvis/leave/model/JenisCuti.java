package org.jarvis.leave.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;

@Getter
@Setter
@Entity
public class JenisCuti extends Base {

    @Column(length = 50)
    private String jenis;

    @Column(columnDefinition = "TEXT")
    private String deskripsi;
}
